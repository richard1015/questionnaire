import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    { path: '', redirectTo: "questionnaire", pathMatch: 'full' },
    // { path: 'login', component: LoginComponent },
    // --------------顾客-------------------- //
    { path: 'questionnaire', loadChildren: "app/pages/questionnaire/questionnaire.module#QuestionnaireModule" },
    { path: '**', redirectTo: "questionnaire", pathMatch: 'full'}
];

export const AppRoutes = routes;
