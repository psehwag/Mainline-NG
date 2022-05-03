
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/MyClasses/student';
import { studentServiceService } from 'src/app/MyServices/student-service.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student: Student = new Student;
  constructor(private studentService: studentServiceService,
    private router: Router, private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let studentId: any = this.route.snapshot.paramMap.get("item");
    if (studentId !== null) {
      this.studentService.findStudent(studentId).subscribe((result: any) => {
        this.student = result
      });
    }
  }

  onSubmit() {
    console.log(this.student.name);
    this.studentService.save(this.student).subscribe(result => {
      this.student = result;
    });
    this.router.navigate(['/getStudents']);
  }

}
