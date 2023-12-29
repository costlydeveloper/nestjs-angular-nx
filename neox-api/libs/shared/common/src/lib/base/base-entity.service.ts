import { BaseRepository } from './base.repository';

export abstract class BaseEntityService<T> {
  protected constructor(private repository: BaseRepository<any>) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<T> {
    return this.repository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
