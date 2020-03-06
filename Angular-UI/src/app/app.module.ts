import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatDialogModule, MatNativeDateModule} from '@angular/material';
import { MatFormFieldModule, MatTableModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { LoginComponent } from './Screens/login/login.component';
import { ListStudComponent } from './Screens/list-stud/list-stud.component';
import { AddStudComponent } from './Screens/add-stud/add-stud.component';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListStudComponent,
    AddStudComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule, MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    DatePickerModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [AddStudComponent]
})  
export class AppModule { }
