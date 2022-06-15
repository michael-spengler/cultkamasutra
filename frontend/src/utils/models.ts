export interface User {
  readonly _id: string;
  readonly thirdPartyId: string;
  readonly provider: string;
  readonly givenName: string;
  readonly familyName: string;
  readonly avatar: string;
  readonly date: number;
  readonly group: string;
  readonly suspended?: number;
}

export interface Position {
  readonly _id: string;
  readonly thumbnail: string;
  readonly title: string;
  readonly description: string;
}

export interface Language {
  readonly _id: string;
  readonly short: string;
  readonly name: string;
  readonly file: string;
}

export interface PositionSearchOptionsDTO {
  type: 'muscle' | 'query';
  input: string;
}

export class UpdatePositionDTO {
  thumbnail?: string;
  primaryMusclesMan?: string[];
  primaryMusclesWoman?: string[];
  secondaryMusclesMan?: string[];
  secondaryMusclesWoman?: string[];
  level?: number;
  intimacy?: number;
}

export interface CreatePositionDTO {
  thumbnail: string;
  primaryMusclesMan: string[];
  primaryMusclesWoman: string[];
  secondaryMusclesMan: string[];
  secondaryMusclesWoman: string[];
  level: number;
  intimacy: number;
}

export interface CreateLangDTO {
  title: string;
  file: string;
  short: string;
}
