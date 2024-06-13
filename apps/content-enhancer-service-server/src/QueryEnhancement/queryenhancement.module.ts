import { Module } from "@nestjs/common";
import { QueryEnhancementService } from "./queryenhancement.service";
import { QueryEnhancementController } from "./queryenhancement.controller";
import { QueryEnhancementResolver } from "./queryenhancement.resolver";

@Module({
  controllers: [QueryEnhancementController],
  providers: [QueryEnhancementService, QueryEnhancementResolver],
  exports: [QueryEnhancementService],
})
export class QueryEnhancementModule {}
