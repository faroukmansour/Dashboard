import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared/shared.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { TemplateComponent } from './template/template.component';
import { NewQuotationsComponent } from './quotations/new-quotations/new-quotations.component';
import { EditQuotationsComponent } from './quotations/edit-quotations/edit-quotations.component';
import { ListQuotationsComponent } from './quotations/list-quotations/list-quotations.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "shared" , component: SharedComponent},
  { path: "" , component: DashboardComponent},
  { path: "client" , component: ClientComponent},
  { path: "template" , component: TemplateComponent},
  { path: "newQuotation" , component: NewQuotationsComponent},
  { path: "editQuotaion/:id" , component: EditQuotationsComponent},
  { path: "listQuotation" , component: ListQuotationsComponent},
  { path: "login" , component: LoginComponent},
  { path: "listQuotation" , component: ListQuotationsComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
