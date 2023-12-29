import { DataSource, ObjectLiteral, Repository } from 'typeorm';
import { EntityTarget } from 'typeorm/common/EntityTarget';

export abstract class BaseRepository<
  T extends ObjectLiteral,
> extends Repository<T> {
  constructor(target: EntityTarget<T>, dataSource: DataSource) {
    super(target, dataSource.createEntityManager());
  }
}
