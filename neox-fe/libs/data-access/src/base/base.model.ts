import { ProviderToken } from '@angular/core';
import { MESSAGE, ServiceLocator } from '@team-link/common';
import { map, Observable } from 'rxjs';
import { CommonDataControl } from '../tools';
import { ReadDataEnum } from '../types';
import { BaseApiService } from './base.api.service';

export interface IBaseModel<T> {
  id: string;

  create(): Observable<T>;
}

export abstract class BaseModel<T>
  extends CommonDataControl
  implements IBaseModel<T>
{
  #apiService!: BaseApiService<any>;
  id = '';

  create(): Observable<T> {
    this.#validateModelBelongings();
    return this.#apiService.create(this as unknown as T).pipe(
      map((item) => {
        this.copyValuesFrom(item);
        return this as unknown as T;
      })
    );
  }

  read(id: string, method: ReadDataEnum = ReadDataEnum.API): Observable<T> {
    this.#validateModelBelongings();
    /*     let observableItem$: Observable<T>;
    switch (method) {
		  case ReadDataEnum.LOCAL_THEN_API: {
		  /!*  const storeItem = this.#localStore.getEntityById(id);
			const itemAlreadyLoading = this.#localStore.getEntityStatusLoading(id);

			if (storeItem || itemAlreadyLoading) {
			  observableItem$ = this.#localStore.selectWaitEntityById$(id);
			} else {
			  observableItem$ = this.#apiService.read(id);
			}
			*!/
			break;
		  }
		 case ReadDataEnum.ONLY_LOCAL: {
		  /!*   observableItem$ = this.#localStore.selectEntityById$(id);
			*!/
		   break;
		  }
		  case ReadDataEnum.API: {
			observableItem$ = this.#apiService.read(id);
			break;
		  }
		}*/
    const observableItem$ = this.#apiService.read(id);
    return observableItem$.pipe(
      map((item) => {
        this.copyValuesFrom(item);
        return this as unknown as T;
      })
    );
  }

  update(): Observable<T> {
    this.#validateModelBelongings();
    return this.#apiService.update(this).pipe(
      map((item) => {
        this.copyValuesFrom(item);
        return this as unknown as T;
      })
    );
  }

  setApiService(token: ProviderToken<BaseApiService<any>>): void {
    this.#apiService = ServiceLocator.injector.get(token);
  }

  #validateModelBelongings(): void {
    if (!this.#apiService) {
      throw new Error(
        `${MESSAGE.ERROR.API_SERVICE_IS_MISSING_FROM_THE_MODEL}: ${this.constructor.name}.`
      );
    }
  }
}
