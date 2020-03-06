import { Component, OnInit, Inject } from '@angular/core';
import { student } from 'src/app/Model/model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentService } from 'src/app/Service/student.service';
import { FormControl } from '@angular/forms';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';


export interface Education {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-stud',
  templateUrl: './add-stud.component.html',
  styleUrls: ['./add-stud.component.css']
})
export class AddStudComponent implements OnInit {


  model:student = new student();
  stud: student[] = [];
  isEditing:boolean=false;
  btnTitle:string="Save";
  AddStudent:string="Add Student";
  fileTOUpload : File ;
  imageUrl: string = "/assets/images/default.png"
  public show: boolean;
  minDate = undefined;
  
  constructor(public dialogRef: MatDialogRef<AddStudComponent>,
    private _StudentService:StudentService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    mindate = new Date().toISOString();
    
  cancel(){
    this.dialogRef.close();
  }

  

  ngOnInit() {
    
    this.isEditing=this.data.isEditing;
    if(this.isEditing == true){
      this.model = this.data.element;
      this.btnTitle="Update";
      this.AddStudent="Edit Student";
      this.show = true;
    }
    else{
      this.btnTitle="Save"
      this.AddStudent="Add Student"
      this.show = false;
    }
    
  }

  educations:Education[] = [
    {value: 'BE', viewValue: 'BE'},
    {value: 'B.Sc', viewValue: 'B.Sc'},
    {value: 'B.A', viewValue: 'B.A'},
    {value: 'B.Tech', viewValue: 'B.Tech'},
    {value: 'BBA', viewValue: 'BBA'},
    {value: 'BCA', viewValue: 'BCA'},
    {value: 'B.Ed', viewValue: 'B.Ed'}
  ];

  // AddDate(){
  //   this.model.StudDOB = new Date();
  // this.model.StudDOB.setDate( this.model.StudDOB.getDate() + 1 );
  //   }

  add()
  {


    const element= new student()
    {
    debugger;
    element.StudName=this.model.StudName;
    element.StudDOB=this.model.StudDOB;
    element.StudEdu=this.model.StudEdu;
    element.StudMob=this.model.StudMob;
    element.StudEmail=this.model.StudEmail;
    element.StudImg=this.model.StudImg;
    }
  if(this.isEditing == false){
       
    this._StudentService.saveStudent(this.model).subscribe(response => {
      if (response) {
        alert("saved sucessfully");
        this.cancel();
      }
    });
  }
  else{
       
    this._StudentService.updateStudent(this.model).subscribe(response => {
      if (response) {
        alert("update sucessfully");
        this.cancel();
      }
    });
  }
}

handleFileInput(file : FileList){
  this.fileTOUpload = file.item(0);
  //Show Image Preview
  var reader = new FileReader();
  reader.onload = (event:any) => {
    this.imageUrl = event.target.result;
  }
    reader.readAsDataURL(this.fileTOUpload);

    // Save Image Preview
    if (file.length > 0) {
      let fileToSave: File = file[0];
      let formData: FormData = new FormData();
      formData.append('Attachment', fileToSave, fileToSave.name);
      this._StudentService.fileAttach(formData).subscribe(response => {
        this.model.StudImg = response.result;
        console.log(response);
      })
    }
  
  
}



}


  

