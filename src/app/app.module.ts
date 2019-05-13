import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { LogoutComponent } from './routes/logout/logout.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { LoginComponent } from './routes/login/login.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ComponentsModule } from './components/components.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './routes/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LogoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: FirestoreSettingsToken, useValue: {} }

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmComponent
  ]
})
export class AppModule { }
