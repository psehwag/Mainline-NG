import { Subjects } from './subjects';
export class Student {
    student_id! : string;
    roll_no!: number;
    name!: string;
    student_class!: number;
    subject: Subjects = new Subjects;
}
