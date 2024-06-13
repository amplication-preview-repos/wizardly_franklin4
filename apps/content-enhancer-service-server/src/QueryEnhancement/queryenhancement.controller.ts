import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { QueryEnhancementService } from "./queryenhancement.service";
import { QueryInputDto } from "../queryEnhancement/QueryInputDto";
import { EnhancedQueryOutputDto } from "../queryEnhancement/EnhancedQueryOutputDto";

@swagger.ApiTags("queryEnhancements")
@common.Controller("queryEnhancements")
export class QueryEnhancementController {
  constructor(protected readonly service: QueryEnhancementService) {}

  @common.Get("/:id/enhance-query")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EnhanceQuery(
    @common.Body()
    body: QueryInputDto
  ): Promise<string> {
        return this.service.EnhanceQuery(body);
      }

  @common.Get("/:id/enhance-user-query")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EnhanceUserQuery(
    @common.Body()
    body: QueryInputDto
  ): Promise<string> {
        return this.service.EnhanceUserQuery(body);
      }

  @common.Post("/enhance-user-topic-query")
  @swagger.ApiOkResponse({
    type: EnhancedQueryOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EnhanceUserTopicQuery(
    @common.Body()
    body: QueryInputDto
  ): Promise<EnhancedQueryOutputDto> {
        return this.service.EnhanceUserTopicQuery(body);
      }
}
