import { Module } from "@nestjs/common";
import { ArticleAndImageRetrievalService } from "./articleandimageretrieval.service";
import { ArticleAndImageRetrievalController } from "./articleandimageretrieval.controller";
import { ArticleAndImageRetrievalResolver } from "./articleandimageretrieval.resolver";

@Module({
  controllers: [ArticleAndImageRetrievalController],
  providers: [ArticleAndImageRetrievalService, ArticleAndImageRetrievalResolver],
  exports: [ArticleAndImageRetrievalService],
})
export class ArticleAndImageRetrievalModule {}
