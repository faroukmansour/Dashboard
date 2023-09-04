import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { ListQuotationsComponent } from './quotations/list-quotations/list-quotations.component';
import { NewQuotationsComponent } from './quotations/new-quotations/new-quotations.component';
import { EditQuotationsComponent } from './quotations/edit-quotations/edit-quotations.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    DashboardComponent,
    ClientComponent,
    TemplateComponent,
    QuotationsComponent,
    ListQuotationsComponent,
    NewQuotationsComponent,
    EditQuotationsComponent,
    LoginComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    
FormsModule,
HttpClientModule,
ReactiveFormsModule,
BrowserAnimationsModule, // Required for animations
    ToastrModule.forRoot(),
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
