import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentModel } from '../student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../location/location.service';
import { StudentserviceService } from '../studentservice.service';
import { Location } from '../../location/location.model';
import { error } from 'console';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrl: './updatestudent.component.css'
})
export class UpdatestudentComponent implements OnInit{

  studentForm!: FormGroup;
  locations: Location[] = [];
  studentId: string = "";
  student: StudentModel = new StudentModel();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationService,
    private studentService: StudentserviceService
  ) { }
  ngOnInit(): void {
    this.studentId= this.route.snapshot.params['id'];


    console.log(this.studentId);

    this.studentForm = this.formBuilder.group({
      name: [''],
      email: [''],
      cellNo: [''],
      location: this.formBuilder.group({
        id: [undefined],
        name: [undefined],
        city: [undefined],
        state: [undefined],
        photo: [undefined],
        availableUnits: [undefined],
        wifi: [undefined],
        laundry: [undefined]
      })
    });

    this.loadLocation();
    this.loadStudentDetails();
  }

  loadLocation(): void {
    this.locationService.getAllLocationForStudent()
    .subscribe({
      next: (res:Location[])=>{
        this.locations=res;
      },
      error: error=>{
        console.log(error);
      }
    });
  }

  loadStudentDetails():void{
    this.studentService.getStudentById(this.studentId)
    .subscribe({
      next: (student: StudentModel)=>{
        console.log('Student Data:', student);
        this.student=student;
        this.studentForm.patchValue({
          name:student.name,
          email: student.email,
          cellNo: student.cellNo,
          location: student.location
        });
      },
      error: error=>{
        console.log(error);
      }
    });
  }

  updateStudent(): void{
    const updatedStudent: StudentModel={
      ...this.student,
      ...this.studentForm.value
    };
    this.studentService.updateStudent(updatedStudent)
    .subscribe({
      next:res=>{
        console.log('Student updated successfully:', res);
        this.router.navigate(['student']); // Navigate to the students list after update
      
      },
      error:error=>{
        console.log(error);
      }
    });
  }

  

}
