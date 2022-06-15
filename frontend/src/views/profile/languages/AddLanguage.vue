<template>
  <div class="view-add-language" content>
    <div max-width>
      <h2>Add Language</h2>
      <br />
      <br />
      <tl-flow flow="column">
        <tc-avatar size="tiny" :src="`assets/flags/${data.file}.svg`" />
      </tl-flow>
      <br />
      <tc-input
        :dark="$store.getters.darkmode"
        title="Title"
        placeholder="Deutsch"
        v-model="data.title"
      />
      <tc-input
        :dark="$store.getters.darkmode"
        title="File"
        placeholder="germany"
        v-model="data.file"
      />
      <tc-input
        :dark="$store.getters.darkmode"
        title="Short"
        placeholder="de"
        v-model="data.short"
      />
      <br />
      <tl-flow>
        <tc-button
          icon="plus"
          name="create language"
          variant="filled"
          tfbackground="success"
          @click="createLanguage()"
          :disabled="sending"
        />
      </tl-flow>
    </div>
  </div>
</template>

<script lang="ts">
import axios from '@/utils/axios';
import { ISKNotification } from '@/utils/interfaces';
import { CreateLangDTO } from '@/utils/models';
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AddLanguage extends Vue {
  public sending = false;
  public data: CreateLangDTO = {
    title: '',
    file: '',
    short: ''
  };

  public async createLanguage(): Promise<void> {
    const { title, file, short } = this.data;

    if (this.sending) return;
    if (title.length === 0) {
      this.sendNotification('Missing input: title');
      return;
    }
    if (file.length === 0) {
      this.sendNotification('Missing input: file');
      return;
    }
    if (short.length === 0) {
      this.sendNotification('Missing input: short');
      return;
    }
    this.sending = true;

    const { data } = await axios.post('lang/create', this.data);
    this.$store.commit('addLang', data);
    this.$router.push({ name: 'languages' });
  }

  private sendNotification(text: string): void {
    this.$store.commit('sendNotification', {
      text: text,
      title: 'Add language'
    } as ISKNotification);
  }
}
</script>
