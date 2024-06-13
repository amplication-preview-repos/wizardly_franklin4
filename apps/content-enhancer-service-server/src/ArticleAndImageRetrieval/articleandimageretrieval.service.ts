import { Injectable } from "@nestjs/common";
import { EnhancedQueryOutputDto } from "../queryEnhancement/EnhancedQueryOutputDto";
import { ArticlesAndImagesOutputDto } from "../articleAndImageRetrieval/ArticlesAndImagesOutputDto";

@Injectable()
export class ArticleAndImageRetrievalService {
  constructor() {}
  async FetchArticlesAndImages(args: EnhancedQueryOutputDto): Promise<ArticlesAndImagesOutputDto> {
    throw new Error("Not implemented");
  }
  async RetrieveArticlesAndImages(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
