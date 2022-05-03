import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Student } from '../MyClasses/student';
import { Observable } from 'rxjs';

@Injectable()
export class studentServiceService {
  
   private studentUrl : string;
   private studentDeleteUrl : string;
   private savestudentUrl : string;
   private onestudentUrl : string;

   constructor(private http: HttpClient) {
     this.studentUrl = 'http://localhost:8080/getStudents';
     this.savestudentUrl = 'http://localhost:8080/addStudents';
     this.studentDeleteUrl = 'http://localhost:8080/deleteStudent/'
     this.onestudentUrl = 'http://localhost:8080/getStudent/';
   }


   public findAll() {
     return this.http.get<Student[]>(this.studentUrl);
   }

   public findStudent(studentid : string){
    console.log("studentid");
    return this.http.get<Student>(this.onestudentUrl+studentid);
   }

   public save(student : Student) {
     console.log(student);
     return this.http.post<Student>(this.savestudentUrl, student);
   }

   public delete(studentid : string) {
    console.log(studentid);
    return this.http.delete(this.studentDeleteUrl+studentid);
  }

}
