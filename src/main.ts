import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { map } from 'rxjs/operators';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // 允许的来源
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 允许的方法
    credentials: true, // 是否允许发送凭据
  });

  // 全局响应拦截器
  app.useGlobalInterceptors({
    intercept(context, next) {
      return next.handle().pipe(
        map((data) => ({
          success: true,
          message: 'Request succeeded',
          data, // 包裹原始数据
        })),
      );
    },
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
