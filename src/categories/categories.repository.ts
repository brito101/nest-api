import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryEntity } from './category.entity';
import { UpdateCategoryDTO } from './dto/update-category.dto';

@Injectable()
export class CategoriesRepository {
  private categories: CategoryEntity[] = [];

  constructor() {
    this.categories.push(new CategoryEntity('name', 'desc'));
  }

  async getAll(): Promise<CategoryEntity[]> {
    return this.categories;
  }

  async create(category: CategoryEntity): Promise<CategoryEntity> {
    this.categories.push(category);

    return category;
  }

  async findById(id: string): Promise<CategoryEntity | undefined> {
    return this.categories.find((category) => category.id === id);
  }

  async updateById(
    id: string,
    data: UpdateCategoryDTO,
  ): Promise<CategoryEntity> {
    const category = await this.findById(id);
    if (!category) {
      throw new NotFoundException('Category Not Found');
    }

    category.name = data.name;
    category.desc = data.desc;
    this.categories.map((categoryItem, index) => {
      if (categoryItem.id === category.id) {
        this.categories[index] = category;
      }
    });

    return category;
  }
}
