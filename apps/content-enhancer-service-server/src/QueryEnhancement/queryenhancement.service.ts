import { Injectable } from "@nestjs/common";
import { QueryInputDto } from "../queryEnhancement/QueryInputDto";
import { EnhancedQueryOutputDto } from "../queryEnhancement/EnhancedQueryOutputDto";

@Injectable()
export class QueryEnhancementService {
  constructor() {}
  async EnhanceQuery(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async EnhanceUserQuery(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async EnhanceUserTopicQuery(args: QueryInputDto): Promise<EnhancedQueryOutputDto> {
    throw new Error("Not implemented");
  }
}
