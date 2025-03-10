import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './service';
import { User } from './entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body('userName') userName: string,
    @Body('email') email: string,
  ): Promise<User> {
    return this.userService.createUser(userName, email);
  }
}
