import { Provider } from 'src/auth/provider';

export interface IUser {
  readonly _id?: string;
  readonly name: string;
  readonly avatar: string;
  readonly provider: Provider;
  readonly thirdPartyId: string;
  readonly date?: number;
  readonly lastLogin?: number;

  readonly permissions?: string[];
  readonly group?: string;

  readonly likedPositions?: string[];
  readonly wishlist?: string[];

  readonly suspended?: number;
}
