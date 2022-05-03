import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './MyComponents/student-list/student-list.component';
import { StudentFormComponent } from './MyComponents/student-form/student-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { studentServiceService } from './MyServices/student-service.service';
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [studentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
