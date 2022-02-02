import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Angular_Form/Form_Component/form/form.component';
import { ReactiveFormComponent } from './Angular_Form/Form_Component/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './Angular_Form/Form_Component/template-driven-form/template-driven-form.component';
import { FromAndMapComponent } from './Rxjs/Rxjs_Operators/from-and-map/from-and-map.component';
import { ListComponent } from './Rxjs/Rxjs_Operators/list/list.component';
import { OFOperatorsComponent } from './Rxjs/Rxjs_Operators/of-operators/of-operators.component';

const routes: Routes = [
  {
    path: "Angular_form", children: [
      { path: "", component: FormComponent },
      { path: "Reactive_form", component: ReactiveFormComponent },
      { path: "Template_drive_form", component: TemplateDrivenFormComponent },
    ]
  },
  {
    path: "Rxjs_Obseravale", children: [
      { path: "", component: ListComponent },
      { path: "from_map", component: FromAndMapComponent },
      { path: "Of_operators", component: OFOperatorsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
