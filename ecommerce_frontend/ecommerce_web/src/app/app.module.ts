import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
//import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; // it is in the youtube video but her not used
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//import { DemoNgZorroAntModule } from "./DemoNgZorroAntdModule" // it is in the youtube video, but this file wasn't build for me so I asked gemini
import { NzButtonModule } from 'ng-zorro-antd/button'; // by gemini
import { NzInputModule } from 'ng-zorro-antd/input'; // by gemini
import { NzIconModule } from 'ng-zorro-antd/icon'; // by gemini
import { NzLayoutModule } from 'ng-zorro-antd/layout'; // by gemini
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LoginComponent } from './components/login/login.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
// ... import other modules as needed


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzLayoutModule,
    CommonModule,
    FormsModule, // Choose between FormsModule or ReactiveFormsModule based on your form complexity
    ReactiveFormsModule,
    NzFormModule,
    NzSpinModule,
    NzInputModule,
    AdminModule,
    UserModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
