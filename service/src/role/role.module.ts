import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';
import { RoleController } from './role.controller';

@Module({
  exports: [TypeOrmModule],
  imports: [TypeOrmModule.forFeature([RoleRepository])],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
