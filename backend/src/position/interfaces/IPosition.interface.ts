export interface IPosition {
  readonly _id?: string;
  readonly thumbnail: string;

  readonly primaryMusclesMan: string[];
  readonly primaryMusclesWoman: string[];
  readonly secondaryMusclesMan: string[];
  readonly secondaryMusclesWoman: string[];

  readonly level: number;
  readonly intimacy: number;
}
