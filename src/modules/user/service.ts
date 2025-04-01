import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(username: string, email: string,password:string): Promise<User> {
    const user = this.userRepository.create({ username, email,password });
    return this.userRepository.save(user);
  }
}
