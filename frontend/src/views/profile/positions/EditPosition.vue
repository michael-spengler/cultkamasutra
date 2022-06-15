<template>
  <div class="view-edit-position" content>
    <h2>Edit Position</h2>
    <br />
    <tl-flow>
      <SKPosition :position="position" />
    </tl-flow>
    <br />
    <tc-input
      :dark="$store.getters.darkmode"
      title="Thumbnail"
      v-model="newPosition.thumbnail"
      :placeholder="position.thumbnail"
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
    <tl-grid>
      <tc-button
        icon="upload"
        name="update position"
        variant="filled"
        tfbackground="success"
        @click="update"
        :disabled="buttonDisabled"
      />
    </tl-grid>
  </div>
</template>

<script lang="ts">
import SKPosition from '@/components/SK-Position.vue';
import axios from '@/utils/axios';
import { muscles } from '@/utils/constants';
import { IPosition } from '@/utils/interfaces';
import { UpdatePositionDTO } from '@/utils/models';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    SKPosition
  }
})
export default class EditPosition extends Vue {
  public newPosition = {} as IPosition;
  public buttonDisabled = false;

  mounted() {
    this.reset();
  }

  get muscles(): string[] {
    return muscles;
  }

  get position(): IPosition {
    return this.$store.getters.position(this.$route.params.id);
  }

  public reset(): void {
    this.newPosition = {
      _id: '',
      thumbnail: '',
      primaryMusclesMan: [],
      primaryMusclesWoman: [],
      secondaryMusclesMan: [],
      secondaryMusclesWoman: [],
      level: 0,
      intimacy: 0
    } as IPosition;
    this.buttonDisabled = false;
  }

  public async update(): Promise<void> {
    this.buttonDisabled = true;
    const updateDTO = {} as UpdatePositionDTO;

    if (this.newPosition.thumbnail.length !== 0) {
      updateDTO.thumbnail = this.newPosition.thumbnail;
    }
    if (this.newPosition.primaryMusclesMan.length !== 0) {
      updateDTO.primaryMusclesMan = this.newPosition.primaryMusclesMan;
    }
    if (this.newPosition.primaryMusclesWoman.length !== 0) {
      updateDTO.primaryMusclesWoman = this.newPosition.primaryMusclesWoman;
    }
    if (this.newPosition.secondaryMusclesMan.length !== 0) {
      updateDTO.secondaryMusclesMan = this.newPosition.secondaryMusclesMan;
    }
    if (this.newPosition.secondaryMusclesWoman.length !== 0) {
      updateDTO.secondaryMusclesWoman = this.newPosition.secondaryMusclesWoman;
    }
    const { data } = await axios.put(
      `position/update/${this.position._id}`,
      updateDTO
    );

    this.$store.commit('addPosition', data);
    this.$router.back();
    this.reset();
  }
}
</script>
<style lang="scss" scoped>
.view-edit-position {
  .tl-grid {
    max-width: 90vw;
    .tl-grid {
      max-width: calc(90vw - 20px);
    }
  }
}
</style>
