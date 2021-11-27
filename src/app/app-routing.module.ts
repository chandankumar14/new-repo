import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MatdialogComponent } from './matdialog/matdialog.component';
import { StepperComponent } from './material/stepper/stepper.component';
import { MeenalTaskComponent } from './meenal-task/meenal-task.component';
const routes: Routes = [
  {path:"dialog", component:MatdialogComponent},
  {path :"meenal-task", component:MeenalTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
