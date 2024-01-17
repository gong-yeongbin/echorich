import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'process';

@Module({
	imports: [UserModule, JwtModule.register({ global: true, secret: process.env.JWT_CONSTANTS, signOptions: { expiresIn: '60s' } })],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}