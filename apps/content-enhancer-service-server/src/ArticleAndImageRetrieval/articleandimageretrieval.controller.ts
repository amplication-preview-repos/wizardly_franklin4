import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ArticleAndImageRetrievalService } from "./articleandimageretrieval.service";
import { ArticlesAndImagesOutputDto } from "../articleAndImageRetrieval/ArticlesAndImagesOutputDto";

@swagger.ApiTags("articleAndImageRetrievals")
@common.Controller("articleAndImageRetrievals")
export class ArticleAndImageRetrievalController {
  constructor(protected readonly service: ArticleAndImageRetrievalService) {}

  @common.Get("/fetch-articles-images")
  @swagger.ApiOkResponse({
    type: ArticlesAndImagesOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchArticlesAndImages(
    @common.Body()
    body: string
  ): Promise<ArticlesAndImagesOutputDto> {
        return this.service.FetchArticlesAndImages(body);
      }

  @common.Get("/:id/retrieve-articles-and-images")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveArticlesAndImages(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RetrieveArticlesAndImages(body);
      }
}
