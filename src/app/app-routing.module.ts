import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './MyComponents/student-form/student-form.component';
import { StudentListComponent } from './MyComponents/student-list/student-list.component';

const routes: Routes = [
  { path: 'getStudents', component: StudentListComponent },
  { path: 'addStudent/:item', component: StudentFormComponent },
  { path: 'addStudent', component: StudentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
