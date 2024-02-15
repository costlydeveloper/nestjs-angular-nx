import { ObjectLiteral, Repository } from 'typeorm';

export abstract class BaseRepository<
  T extends ObjectLiteral,
> extends Repository<T> {
  protected constructor(repo: Repository<T>) {
    super(repo.target, repo.manager, repo.queryRunner);
  }
}
