import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/user/interfaces/IUser.interface';

export const SKRoles = (roles: string[]) => SetMetadata('SKRoles', roles);
export const SKPermissions = (permissions: string[]) =>
  SetMetadata('SKPermissions', permissions);

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp();
    const roles = this.reflector.get<string[]>('SKRoles', context.getHandler());
    const permissions = this.reflector.get<string[]>(
      'SKPermissions',
      context.getHandler(),
    );

    if (!roles || !roles.length) return true;
    if (!permissions || !permissions.length) return true;

    const req = ctx.getRequest();
    const user = req.user as IUser;

    const rolePermission = roles.some(r =>
      user.group.toLowerCase().includes(r),
    );
    if (rolePermission) return rolePermission;

    return permissions.some(r => (user.permissions || []).includes(r));
  }
}
