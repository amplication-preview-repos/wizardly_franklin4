import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("EnhancedQueryOutputDtoObject")
class EnhancedQueryOutputDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    enhancedQuery!: string;
}

export { EnhancedQueryOutputDto as EnhancedQueryOutputDto };