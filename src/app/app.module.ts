import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AsyncObservablePipeComponent } from './pipe/asyncObservablePipe';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SignalComponent } from './signal/signal.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncObservablePipeComponent,
    RxjsSubjectComponent,
    LifecycleComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    SignalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
