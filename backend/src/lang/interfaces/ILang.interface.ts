export interface ILang {
  readonly _id?: string;
  readonly title: string;
  readonly file: string;
  readonly short: string;
  readonly data: Record<string, any>;
}
