import { NgModule } from '@angular/core';
import { FormComponent } from '../Form_Component/form/form.component';
import { ReactiveFormComponent } from '../Form_Component/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from '../Form_Component/template-driven-form/template-driven-form.component';
@NgModule({
  declarations: [
    FormComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
   
  ],
  exports:[
    FormComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent
  ]
})
export class FormModule { }
