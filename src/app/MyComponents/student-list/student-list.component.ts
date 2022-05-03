import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/MyClasses/student';
import { studentServiceService } from 'src/app/MyServices/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  allstudents: Student[] = [];
  students: Student[] = [];

  constructor(private studentService: studentServiceService,
    private router: Router, private route: ActivatedRoute,) {
  }
  
  ngOnInit() {
    if(this.allstudents.length === 0){
      this.studentService.findAll().subscribe((data: Student[]) => {
        this.allstudents = data;
        this.students = [...this.allstudents];
      });
    }
  }

  refresh(){
    this.studentService.findAll().subscribe((data: Student[]) => {
      this.allstudents = data;
      this.students = [...this.allstudents];
    });
  }

  onChange(devicevalue: string) {
    this.students = [...this.allstudents];
    if (devicevalue !== "all") {
      this.students = this.students.filter(item => item.student_class === parseInt(devicevalue));
    }
  }

  onDelete(studentid: string) {
    this.studentService.delete(studentid).subscribe(result => 
      this.students = this.students.filter(item => item.student_id !== result.toString()
    ));
  }

  onEdit(student: Student) {
    this.router.navigate(['/addStudent/' + student.student_id, { item: student.student_id }]);
  }


}
