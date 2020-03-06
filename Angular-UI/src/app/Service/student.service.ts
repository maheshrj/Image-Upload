import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



const URL =environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  saveStudent(modeldata): Observable<any>{
    const dataUrl = URL + "Student/insertStudentDTO";
    return this.http.post<any>(dataUrl,modeldata)
  }

  getStudent(): Observable<any>{
    const dataUrl = URL + "Student/GetStudentDTO";
    return this.http.get<any>(dataUrl)
  }

  updateStudent(modeldata): Observable<any>{
    debugger;
    const dataUrl =URL + "Student/updateStudentDTO";
    return this.http.post<any>(dataUrl,modeldata)
  }

  deleteStudent(StudID): Observable<any>{
    const dataUrl = URL + "Student/deleteStudentDTO/" +StudID;
    return this.http.post<any>(dataUrl,StudID)
  }

  fileAttach(modeldata): Observable<any>{
    const dataUrl = URL +  "Student/Imageupload";
    return this.http.post<any>(dataUrl,modeldata)
  }

}
