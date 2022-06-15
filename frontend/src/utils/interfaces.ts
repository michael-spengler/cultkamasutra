export enum Provider {
  GOOGLE = 'Google'
}

export interface IUser {
  readonly _id: string;
  readonly name: string;
  readonly avatar: string;
  readonly provider: Provider;
  readonly thirdPartyId: string;
  readonly date: number;
  readonly lastLogin: number;

  readonly permissions: string[];
  readonly group: string;

  likedPositions: string[];
  completedPositions: string[];

  readonly suspended: number;
}
export interface IPosition {
  readonly _id: string;
  readonly thumbnail: string;

  readonly primaryMusclesMan: string[];
  readonly primaryMusclesWoman: string[];
  readonly secondaryMusclesMan: string[];
  readonly secondaryMusclesWoman: string[];

  readonly level: number;
  readonly intimacy: number;
}

export interface ISKNotification {
  readonly img?: string;
  readonly title: string;
  readonly text: string;
  readonly to?: object;
}

export interface ILangInfo {
  readonly _id: string;
  readonly title: string;
  readonly file: string;
  readonly short: string;
}
export interface ILang {
  readonly _id: string;
  readonly title: string;
  readonly file: string;
  readonly short: string;
  readonly data: Record<string, any>;
}

export interface IChatMessage {
  readonly _id: number;
  readonly received: boolean;
  content?: string;
  ids?: string[][];
}
