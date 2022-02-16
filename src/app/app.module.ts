import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './Angular_Form/Form_Component/form/form.component';
import { ReactiveFormComponent } from './Angular_Form/Form_Component/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './Angular_Form/Form_Component/template-driven-form/template-driven-form.component';
import { ListComponent } from './Rxjs/Rxjs_Operators/list/list.component';
import { FromAndMapComponent } from './Rxjs/Rxjs_Operators/from-and-map/from-and-map.component';
import { OFOperatorsComponent } from './Rxjs/Rxjs_Operators/of-operators/of-operators.component';
import { AngularMaterialsModule } from './Angular_Material/angular-materials.module';
import { UIDesignComponent } from './ui-design/ui-design.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    ListComponent,
    FromAndMapComponent,
    OFOperatorsComponent,
    UIDesignComponent,
   
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialsModule,
    ReactiveFormsModule,
    HttpClientModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
