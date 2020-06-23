import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpComponent } from './http.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {PostsService} from './posts.service';

@NgModule({
  declarations: [HttpComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, MatProgressSpinnerModule],
  providers: [PostsService],
})
export class HttpModule {}
