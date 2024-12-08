import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { IVacany } from './types';
import * as uuid from 'uuid';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getVacancies(): Promise<IVacany[]> {
    return this.appService.getVacancies();
  }

  @Get(':id')
  getVacancyQuestionsById(@Param() { id }) {
    return this.appService.getVacancyQuestions(id);
  }

  @Post(':id')
  applayVacancy(@Body() data: any) {
    return this.appService.applayVacancy(data);
  }

  @Get(':id/:answerId')
  getUserAsnwerVacancy(@Param() { id, answerId }) {
    return this.appService.getUserAsnwerVacancy(id, answerId);
  }

  @Post(':id/:answerId/cv')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const fileExt = extname(file.originalname);
          const fileName = `${uuid.v4()}${fileExt}`;
          callback(null, fileName);
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024,
      },
      fileFilter: (req, file, callback) => {
        const allowedTypes = [
          'application/pdf',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];
        if (allowedTypes.includes(file.mimetype)) {
          callback(null, true);
        } else {
          callback(new Error('Only PDF and DOCX files are allowed!'), false);
        }
      },
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    // const s = {
    //   message: 'File uploaded successfully',
    //   filePath: `/uploads/${file.filename}`,
    // };
    return this.appService.applyCV();
  }
}
