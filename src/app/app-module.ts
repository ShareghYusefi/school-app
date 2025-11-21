import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Custom } from './components/custom/custom';
import { Course } from './components/course/course';

// You can think of an Angular module like a folder in your project that tells Angular what;s inside it and how the pieces work together.
@NgModule({
  // components/directives/pipes belong to this module
  declarations: [App, Custom, Course],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
