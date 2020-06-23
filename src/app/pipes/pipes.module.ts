import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PipesComponent} from './pipes.component';
import {ShortenPipe} from './shorten.pipe';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [PipesComponent, ShortenPipe, FilterPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PipesComponent]
})
export class PipesModule { }
