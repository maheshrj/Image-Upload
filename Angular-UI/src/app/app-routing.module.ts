import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Screens/login/login.component';
import { ListStudComponent } from './Screens/list-stud/list-stud.component';
import { AddStudComponent } from './Screens/add-stud/add-stud.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
},
{
  path: 'login',
  component: LoginComponent,
},

{
  path: 'list-stud',
  component: ListStudComponent, 
},


{
  path: 'add-stud',
  component: AddStudComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
