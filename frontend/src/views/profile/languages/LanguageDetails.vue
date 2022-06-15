<template>
  <div class="view-language-details" :key="compID" content>
    <div v-if="language" max-width>
      <tl-flow class="head">
        <div class="flag">
          <img :src="`assets/flags/${language.file}.svg`" alt="" />
        </div>
        <div class="name">{{ language.title }} ({{ language.short }})</div>
      </tl-flow>

      <tc-divider :dark="$store.getters.darkmode" />

      <br />
      <tc-segments
        :dark="$store.getters.darkmode"
        @input="reset"
        v-model="segment"
      >
        <tc-segment-item title="General" />
        <tc-segment-item title="UI Elements" />
        <tc-segment-item title="Position" />
      </tc-segments>
      <br />

      <div v-if="segment === 0">
        <h2>General</h2>
        <tc-revealer
          v-for="n in Object.keys(generalElement)"
          :key="n"
          :title="n"
          :dark="$store.getters.darkmode"
        >
          <tc-input
            v-for="(f, i) in Object.values(generalElement[n])"
            :key="f + n + i"
            :title="Object.keys(generalElement[n])[i]"
            :placeholder="$getText(f.key, '~' + f.key, langId)"
            v-model="generalElement[n][Object.keys(generalElement[n])[i]].value"
            :dark="$store.getters.darkmode"
          />
          <br />
          <tc-button
            variant="filled"
            tfbackground="success"
            @click="updateGeneral(n)"
            name="update"
            icon="cloud-upload"
          />
        </tc-revealer>
      </div>

      <div v-if="segment === 1">
        <h2>UI Elements</h2>

        <tc-revealer
          v-for="n in Object.keys(uiElement)"
          :key="n"
          :title="n"
          :dark="$store.getters.darkmode"
        >
          <tc-input
            v-for="(f, i) in Object.values(uiElement[n])"
            :key="f + n + i"
            :title="Object.keys(uiElement[n])[i]"
            :placeholder="$getText(f.key, '~' + f.key, langId)"
            v-model="uiElement[n][Object.keys(uiElement[n])[i]].value"
            :dark="$store.getters.darkmode"
          />
          <br />
          <tc-button
            variant="filled"
            tfbackground="success"
            @click="updateUI(n)"
            name="update"
            icon="cloud-upload"
          />
        </tc-revealer>
      </div>

      <div v-if="segment === 2">
        <template v-if="!selectedPosition">
          <h2>Position</h2>
          <br />
          <tc-button
            variant="filled"
            name="Select a position"
            @click="openSelectPosition"
          />
        </template>
        <template v-else>
          <tl-flow horizontal="space-between">
            <h2>Position</h2>
            <tc-link @click="openSelectPosition">other position</tc-link>
          </tl-flow>
          <br />
          <tc-input
            title="Title"
            v-model="newTitle"
            :dark="$store.getters.darkmode"
            :placeholder="selectedPosition.title"
          />
          <br />
          <tc-textarea
            title="Description"
            v-model="newDescription"
            :dark="$store.getters.darkmode"
            :placeholder="selectedPosition.description"
          />
          <br />
          <tl-grid max-width>
            <tc-button
              name="Update translation"
              icon="cloud-upload"
              variant="filled"
              tfbackground="success"
              @click="updatePosition"
            />
          </tl-grid>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from '@/utils/axios';
import { langGeneral, langUI } from '@/utils/constants';
import { EventBus } from '@/utils/eventbus';
import { ILang, IPosition } from '@/utils/interfaces';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LanguageDetails extends Vue {
  public segment = 1;
  public selectedPosition: null | IPosition = null;
  public newTitle = '';
  public newDescription = '';
  public uiElement = langUI;
  public generalElement = langGeneral;
  public compID = '1704';

  async mounted() {
    EventBus.$on('sk-select-position-return', (id: string) => {
      this.selectedPosition = this.$store.getters.position(id);
    });

    const { data } = await axios.get('lang/' + this.langId);
    if (data && data.data) {
      this.$store.commit('langLoadedNAS', data);
      this.compID = '1705';
    }
  }

  get langId(): string {
    return this.$route.params.id;
  }

  public reset(): void {
    this.newTitle = '';
    this.newDescription = '';
  }

  public openSelectPosition(): void {
    EventBus.$emit('sk-select-position');
  }

  public async updatePosition(): Promise<void> {
    const langId = this.langId;
    if (this.newTitle.length > 0) {
      axios.put('lang/update/' + langId, {
        key: 'position.' + this.selectedPosition?._id + '.title',
        value: this.newTitle
      });
    }
    if (this.newDescription.length > 0) {
      axios.put('lang/update/' + langId, {
        key: 'position.' + this.selectedPosition?._id + '.description',
        value: this.newDescription
      });
    }
  }

  public async updateUI(tab: string): Promise<void> {
    this.update(tab, this.uiElement);
  }

  public async updateGeneral(tab: string): Promise<void> {
    this.update(tab, this.generalElement);
  }

  public async update(
    tab: string,
    entries: Record<string, Record<string, { key: string; value: string }>>
  ): Promise<void> {
    let inputs: { key: string; value: string }[] = [];
    for (const [key, value] of Object.entries(entries)) {
      if (key === tab) {
        inputs = Object.values(value);
      }
    }
    const langId = this.langId;
    inputs
      .filter(x => x.value.length !== 0)
      .forEach(x => {
        axios.put('lang/update/' + langId, x);
        x.value = '';
      });
  }

  get languages(): ILang[] {
    return this.$store.getters.langs;
  }

  get language(): ILang {
    const res = this.languages.filter(x => x._id === this.langId);
    if (res && res.length > 0) return res[0];
    this.$router.push({ name: 'languages' });
    return this.languages[0];
  }
}
</script>
<style lang="scss" scoped>
.view-language-details {
  .head {
    .flag {
      img {
        height: 40px;
      }
      margin: 0 7.5px;
    }
    .name {
      margin: 0 7.5px;
      font-weight: bold;
      font-size: 20px;
    }
  }
}
</style>
