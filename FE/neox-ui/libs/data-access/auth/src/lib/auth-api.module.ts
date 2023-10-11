import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthApiService } from './auth-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [AuthApiService],
})
export class AuthApiModule {}
