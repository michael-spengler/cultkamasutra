<template>
  <div class="view-add-position" content>
    <h2>Add new position</h2>
    <tc-input
      :dark="$store.getters.darkmode"
      title="Thumbnail"
      v-model="newPosition.thumbnail"
    />

    <br />

    <h2>Muscles</h2>
    <tl-grid gap="0 20">
      <div>
        <p center><b>Man</b></p>
        <tl-grid gap="0" minWidth="100">
          <tc-select
            :dark="$store.getters.darkmode"
            :multiple="true"
            placeholder="Primary"
            @selectedItems="m => (newPosition.primaryMusclesMan = m)"
          >
            <tc-select-item v-for="m in muscles" :key="m + 'mp'" :title="m" />
          </tc-select>
          <tc-select
            :dark="$store.getters.darkmode"
            :multiple="true"
            placeholder="Secondary"
            @selectedItems="m => (newPosition.secondaryMusclesMan = m)"
          >
            <tc-select-item v-for="m in muscles" :key="m + 'mp'" :title="m" />
          </tc-select>
        </tl-grid>
      </div>
      <div>
        <p center><b>Woman</b></p>
        <tl-grid gap="0" minWidth="100">
          <tc-select
            :dark="$store.getters.darkmode"
            :multiple="true"
            placeholder="Primary"
            @selectedItems="m => (newPosition.primaryMusclesWoman = m)"
          >
            <tc-select-item v-for="m in muscles" :key="m + 'mp'" :title="m" />
          </tc-select>
          <tc-select
            :dark="$store.getters.darkmode"
            :multiple="true"
            placeholder="Secondary"
            @selectedItems="m => (newPosition.secondaryMusclesWoman = m)"
          >
            <tc-select-item v-for="m in muscles" :key="m + 'mp'" :title="m" />
          </tc-select>
        </tl-grid>
      </div>
    </tl-grid>
    <br />
    <h2>Other</h2>
    <tl-grid>
      <div>
        <tl-flow horizontal="space-between">
          <h3>Level</h3>
          <div>{{ newPosition.level }}</div>
        </tl-flow>
        <tc-slider
          :dark="$store.getters.darkmode"
          v-model="newPosition.level"
          min="1"
          max="3"
        />
      </div>
      <div>
        <tl-flow horizontal="space-between">
          <h3>Intimacy</h3>
          <div>{{ newPosition.intimacy }}</div>
        </tl-flow>
        <tc-slider
          :dark="$store.getters.darkmode"
          v-model="newPosition.intimacy"
          min="1"
          max="3"
        />
      </div>
    </tl-grid>

    <br />
    <tl-grid>
      <tc-button
        @click="submit()"
        :disabled="submitting"
        name="add position"
        icon="plus"
        variant="filled"
        tfbackground="success"
      />
    </tl-grid>
  </div>
</template>

<script lang="ts">
import axios from '@/utils/axios';
import { muscles } from '@/utils/constants';
import { IPosition } from '@/utils/interfaces';
import { CreatePositionDTO } from '@/utils/models';
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AddPosition extends Vue {
  public submitting = false;
  public muscles = muscles;
  public newPosition: IPosition = {
    _id: '',
    thumbnail: '',
    primaryMusclesMan: [],
    secondaryMusclesMan: [],
    primaryMusclesWoman: [],
    secondaryMusclesWoman: [],
    level: 1,
    intimacy: 1
  };

  public async submit(): Promise<void> {
    const {
      thumbnail,
      primaryMusclesMan,
      secondaryMusclesMan,
      primaryMusclesWoman,
      secondaryMusclesWoman,
      level,
      intimacy
    } = this.newPosition;

    if (thumbnail.length === 0) {
      alert('Please insert a thumbnail URL');
      return;
    }
    if (primaryMusclesMan.length === 0) {
      alert('Please insert a primary muscle for men');
      return;
    }
    if (secondaryMusclesMan.length === 0) {
      alert('Please insert a secondary muscle for men');
      return;
    }
    if (primaryMusclesWoman.length === 0) {
      alert('Please insert a primary muscle for women');
      return;
    }
    if (secondaryMusclesWoman.length === 0) {
      alert('Please insert a secondary muscle for women');
      return;
    }

    this.submitting = true;

    const { data } = await axios.post('position/create', {
      thumbnail: thumbnail,
      primaryMusclesMan: primaryMusclesMan,
      primaryMusclesWoman: primaryMusclesWoman,
      secondaryMusclesMan: secondaryMusclesMan,
      secondaryMusclesWoman: secondaryMusclesWoman,
      level: level,
      intimacy: intimacy
    } as CreatePositionDTO);

    if (data && data._id) {
      this.$store.commit('addPosition', data);
      this.$router.push({ name: 'positions-detail', params: { id: data._id } });
    } else {
      this.$router.back();
    }
  }
}
</script>
