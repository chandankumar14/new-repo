import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MatdialogComponent } from './matdialog/matdialog.component';
import { StepperComponent } from './material/stepper/stepper.component';
const routes: Routes = [
  {path:"dialog", component:MatdialogComponent},
  {path :"form", component:StepperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
