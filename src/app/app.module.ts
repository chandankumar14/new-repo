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



@NgModule({
  declarations: [
    AppComponent,
    MatdialogComponent,
    PopupComponent,
    FormComponent,
    StepperComponent,
    MeenalTaskComponent,
    MeenalDemoComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
