import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialogConfig } from '@angular/material';
import { student } from "src/app/Model/model";
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/Service/student.service';
import {MatDialog, MatDialogRef } from '@angular/material';
import { AddStudComponent } from '../add-stud/add-stud.component';
import { debug } from 'util';
import { element } from '@angular/core/src/render3';


@Component({
  selector: 'app-list-stud',
  templateUrl: './list-stud.component.html',
  styleUrls: ['./list-stud.component.css']
})
export class ListStudComponent implements OnInit {


  displayedColumns = ['StudImg', 'StudName', 'StudDOB', 'StudEdu', 'StudMob', 'StudEmail' , 'Action'];
  model:student = new student();
  stud: student[] = [];
  imageUrl: string = "/assets/images/default.png"
  fileTOUpload : File = null;

  // Model:student = new student();
  // stud: student[] = [];



  constructor(private router:Router, private http:HttpClient, private _StudentService:StudentService,
    private dialog:MatDialog) { }

  dataSource = new MatTableDataSource();
  
  new(){
    const dialogRef = this.dialog.open(AddStudComponent, {
      width: '70%',
      height: '90%'
    
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('this dialog was closed');
      this.ngOnInit();
    })
  }

  Update(value, isEditing){
    const dialogRef = this.dialog.open(AddStudComponent, {
      width: '70%',
      height: '90%',
      data:{element:value , isEditing:isEditing}
    });
    
    dialogRef.afterClosed().subscribe(result =>{
      console.log('this dialog was closed');
      this.ngOnInit();
    })
  }

  logout(){
    this.router.navigate(['/login']);
  }
  

  deleteData(element) {
    if (confirm("Are you sure?")) {
  this._StudentService.deleteStudent(element).subscribe((response: any) => {
  if (response) {
     alert("successfully deleted");
     this.ngOnInit();
   }
  });
  }
  }

  Getapp()
  {
    debugger;
    this._StudentService.getStudent().subscribe(response => {
    response['result'];
    if (response) {
      this.stud = response.result;
       this.dataSource = new MatTableDataSource(this.stud);
       console.log(this.dataSource);
    }
  });
 }

  ngOnInit() {
    this. Getapp();
  }

  




}
