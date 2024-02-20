import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonComponent } from '@team-link/button';
import { Person, PersonApiService } from '@team-link/data-access';

@Component({
  selector: 'tl-fetch-api',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslocoPipe],
  templateUrl: './fetch-api.component.html',
  styleUrl: './fetch-api.component.scss',
})
export class FetchApiComponent {
  private http = inject(HttpClient);
  private personApiService = inject(PersonApiService);
  clickMe() {
    //console.log(tokens);
    this.http
      .get<any>(
        'http://localhost:3000/api/users/2d7e3bee-be81-4553-901f-aff4980a3257'
      )
      .subscribe((res) => console.log(res, res['person']));
  }
  whoAmI() {
    this.http
      .get<any>('http://localhost:3000/api/auth/whoami')
      .subscribe((res) => console.log(res));
  }
  personCreate() {
    const person = new Person();
    person.firstName = 'Marija';
    person.lastName = 'Juric';
    this.personApiService.create(person).subscribe((res) => console.log(res));
  }
  personRead() {
    this.personApiService
      .read('d58a8e88-4566-4976-af04-57e8848ffbc8')
      .subscribe((res) => console.log(res));
  }
  personUpdate() {
    const person = new Person();
    person.id = 'd58a8e88-4566-4976-af04-57e8848ffbc8';
    person.firstName = 'Marija';
    person.lastName = 'Juric';
    this.personApiService.update(person).subscribe((res) => console.log(res));
  }

  personDelete() {
    this.personApiService
      .delete('3275182b-a3ed-4a31-b285-085e16c4e166')
      .subscribe((res) => console.log(res));
  }
  personGetAll() {
    this.personApiService.getAll().subscribe((res) => console.log(res));
  }
}
