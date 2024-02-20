import { Injectable } from '@angular/core';
import { BaseApiService } from '../../base/base.api.service';
import { RestApiHelper } from '../../tools';
import { PersonType } from './person.model';
import { PersonSchema } from './person.schema';

@Injectable({ providedIn: 'root' })
export class PersonApiService extends BaseApiService<PersonType> {
  constructor(restApiHelper: RestApiHelper) {
    super(restApiHelper.apiEntityUrlBuilder('persons'), PersonSchema);
  }
}
