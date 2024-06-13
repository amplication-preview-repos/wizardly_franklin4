import * as graphql from "@nestjs/graphql";
import { QueryInputDto } from "../queryEnhancement/QueryInputDto";
import { EnhancedQueryOutputDto } from "../queryEnhancement/EnhancedQueryOutputDto";
import { QueryEnhancementService } from "./queryenhancement.service";

export class QueryEnhancementResolver {
  constructor(protected readonly service: QueryEnhancementService) {}

  @graphql.Query(() => String)
  async EnhanceQuery(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.EnhanceQuery(args);
  }

  @graphql.Query(() => String)
  async EnhanceUserQuery(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.EnhanceUserQuery(args);
  }

  @graphql.Mutation(() => EnhancedQueryOutputDto)
  async EnhanceUserTopicQuery(
    @graphql.Args()
    args: QueryInputDto
  ): Promise<EnhancedQueryOutputDto> {
    return this.service.EnhanceUserTopicQuery(args);
  }
}
