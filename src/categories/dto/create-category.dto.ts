import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDTO {
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  desc: string;
}
