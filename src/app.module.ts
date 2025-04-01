import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/controller';
import { User } from './modules/user/entity';
import { UserService } from './modules/user/service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'rm-bp13f798e44lu1zta1o.mysql.rds.aliyuncs.com',
      port: 3306,
      username: 'admin_1',
      password: 'Lcl19970307',
      database: 'lcl_db',
      entities: [User],
      // entities: [__dirname + '/**/*.entity{.ts}'], // 使用通配符模式加载所有实体
      synchronize: true,
      extra: {
        connectTimeout: 30000, // 30秒
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
