import * as graphql from "@nestjs/graphql";
import { EnhancedQueryOutputDto } from "../queryEnhancement/EnhancedQueryOutputDto";
import { ArticlesAndImagesOutputDto } from "../articleAndImageRetrieval/ArticlesAndImagesOutputDto";
import { ArticleAndImageRetrievalService } from "./articleandimageretrieval.service";

export class ArticleAndImageRetrievalResolver {
  constructor(protected readonly service: ArticleAndImageRetrievalService) {}

  @graphql.Query(() => ArticlesAndImagesOutputDto)
  async FetchArticlesAndImages(
    @graphql.Args()
    args: EnhancedQueryOutputDto
  ): Promise<ArticlesAndImagesOutputDto> {
    return this.service.FetchArticlesAndImages(args);
  }

  @graphql.Query(() => String)
  async RetrieveArticlesAndImages(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RetrieveArticlesAndImages(args);
  }
}
