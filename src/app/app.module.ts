import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainFormComponent } from './main-form/main-form.component';
import { FormAutoCompleteFieldComponent } from './form-auto-complete-field/form-auto-complete-field.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';
import { CustomValidatorsService } from './custom-validators.service';

// import { ProgressBarComponent } from './progress-bar/progress-bar.component';
// import { TextfieldComponent } from './textfield/textfield.component';
// import { MaterialRadioComponent } from './material-radio/material-radio.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    FormAutoCompleteFieldComponent,
    LoginComponentComponent,
    CustomValidatorsComponent,
    HomeComponent
    // TextfieldComponent,
    // MaterialRadioComponent,
    // ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [
    CustomValidatorsService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppModule {
  // constructor(router: Router) {
  // }
}
