import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire.component';

const routes: Routes = [
  { path: '', component: QuestionnaireComponent },
];

export const QuestionnaireRoutes = RouterModule.forChild(routes);
