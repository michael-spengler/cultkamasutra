import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class SKBodyMixin extends Vue {
  @Prop() primary!: string[];
  @Prop() secondary!: string[];

  public isPrimary(muscle: string): boolean {
    return (this.primary || []).includes(muscle);
  }
  public isSecondary(muscle: string): boolean {
    return (this.secondary || []).includes(muscle);
  }

  get hidden(): boolean {
    return !!this.primary || !!this.secondary;
  }

  public select(selection: string) {
    this.$emit('selected', selection);
  }
}
