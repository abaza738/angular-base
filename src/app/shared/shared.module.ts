import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule.forChild()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule
  ],
  providers: [
  ]
})
export class SharedModule { }
