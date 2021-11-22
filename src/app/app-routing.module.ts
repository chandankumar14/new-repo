import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MatdialogComponent } from './matdialog/matdialog.component';
const routes: Routes = [
  {path:"dialog", component:MatdialogComponent},
  {path :"form", component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
