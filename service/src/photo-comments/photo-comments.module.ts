import { Module, forwardRef } from '@nestjs/common';
import { PhotoCommentsService } from './photo-comments.service';
import { PhotoCommentsController } from './photo-comments.controller';
import { PhotoCommentsRepository } from './photo-comments.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { PhotoModule } from '../photo/photo.module';
import { PushtokenModule } from 'src/pushtoken/pushtoken.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PhotoCommentsRepository]),
    UserModule,
    forwardRef(() => PhotoModule),
    PushtokenModule,
  ],
  providers: [PhotoCommentsService],
  controllers: [PhotoCommentsController],
  exports: [TypeOrmModule, PhotoCommentsService],
})
export class PhotoCommentsModule {}
