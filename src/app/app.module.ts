import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatdialogComponent } from './matdialog/matdialog.component';
import {MatStepperModule} from '@angular/material/stepper';
import {PopupComponent} from './popup/popup.component';
import { FormComponent } from './form/form.component';
import { StepperComponent } from './material/stepper/stepper.component';
import { MeenalTaskComponent } from './meenal-task/meenal-task.component'
import { HttpClientModule } from '@angular/common/http';
import { MeenalDemoComponent } from './meenal-demo/meenal-demo.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReuseComponent } from './reuse/reuse.component';
import { ReactiveFormComponent } from './Angular_Form/Form_Component/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './Angular_Form/Form_Component/template-driven-form/template-driven-form.component';
import { FirstComponentComponent } from './Component_communication/first-component/first-component.component';
import { SecondComponentComponent } from './Component_communication/second-component/second-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MatdialogComponent,
    PopupComponent,
    FormComponent,
    StepperComponent,
    MeenalTaskComponent,
    MeenalDemoComponent,
    ReuseComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    FirstComponentComponent,
    SecondComponentComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
