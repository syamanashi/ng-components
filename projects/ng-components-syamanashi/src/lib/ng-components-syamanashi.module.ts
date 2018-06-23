import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerStatusComponent } from './hacker-status/hacker-status.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HackerStatusComponent],
  exports: [HackerStatusComponent]
})
export class NgComponentsSyamanashiModule { }
