export class ListCategoryDTO {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly desc: string,
    readonly date: Date,
  ) {}
}
