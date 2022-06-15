import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { IUser } from 'src/user/interfaces/IUser.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public redirect(jwt: any, res: Response): void {
    /**
     * redirect to suspension view
     */
    if (jwt.suspended) {
      res.redirect(
        `${this.configService.get('REDIRECT')}profile/suspended?t=${
          jwt.suspended
        }`,
      );
      /**
       * redirect to fitnesshub with token
       */
    } else if (jwt.token) {
      res.redirect(
        `${this.configService.get('REDIRECT')}?skToken=${jwt.token}`,
      );
    }
  }

  async validateOAuthLogin(u: IUser): Promise<any> {
    try {
      const user: IUser = await (await this.userService.signIn(u)).toObject();

      if (user.suspended && user.suspended > new Date().getTime()) {
        return { suspended: user.suspended };
      }

      await this.userService.pardonUser(user._id);
      return { token: this.jwtService.sign(user) };
    } catch (error) {
      throw new InternalServerErrorException(
        'validateOAuthLogin',
        error.message,
      );
    }
  }
}
