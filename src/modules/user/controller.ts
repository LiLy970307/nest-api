import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './service';
import { User } from './entity';

@Controller('user/creatUser')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createUser(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string
  ): Promise<User> {
    return this.userService.createUser(username, email, password);
  }
}
