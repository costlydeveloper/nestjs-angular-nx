import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { validateListWithSchema, validateWithSchema } from '@team-link/common';
import { Observable } from 'rxjs';
import { ZodSchema } from 'zod';
import { IBaseModel } from './base.model';

export abstract class BaseApiService<Entity> {
  private http = inject(HttpClient);

  protected constructor(
    private baseUrl: string,
    private entitySchema: ZodSchema
  ) {}

  getAll(): Observable<Entity[]> {
    return this.http
      .get<Entity[]>(`${this.baseUrl}`)
      .pipe(validateListWithSchema(this.entitySchema));
  }

  read(id: string): Observable<Entity> {
    return this.http
      .get<Entity>(`${this.baseUrl}/${id}`)
      .pipe(validateWithSchema(this.entitySchema));
  }

  create(data: Entity): Observable<Entity> {
    return this.http
      .post<Entity>(this.baseUrl, data)
      .pipe(validateWithSchema(this.entitySchema));
  }

  update(data: Entity & IBaseModel): Observable<Entity> {
    return this.http
      .patch<Entity>(`${this.baseUrl}/${data.id}`, data)
      .pipe(validateWithSchema(this.entitySchema));
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
