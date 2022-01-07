import { Category } from "../infra/typeorm/entities/Category";

// DTO - Data transfer object - Obj responsavel pela transf entre uma
// class e outra
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
