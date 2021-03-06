import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IUser } from './interfaces/IUser.interface';

const SKUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user as IUser;
});

export default SKUser;
