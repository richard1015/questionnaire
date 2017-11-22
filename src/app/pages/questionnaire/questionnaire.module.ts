import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionnaireRoutes } from './questionnaire.routing';
import { HeaderModule } from '../../components/header/header.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    QuestionnaireRoutes,
    HeaderModule,
    FormsModule,
  ],
  declarations: [QuestionnaireComponent]
})
export class QuestionnaireModule { }