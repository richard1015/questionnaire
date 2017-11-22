import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    // --------------顾客-------------------- //
    { path: 'questionnaire', loadChildren: "app/pages/questionnaire/questionnaire.module#QuestionnaireModule" },
    { path: '**', component: LoginComponent }
];

export const AppRoutes = routes;
