import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Custom } from './components/custom/custom';
import { Course } from './components/course/course';
import { Navbar } from './components/navbar/navbar';
import { FormsModule } from '@angular/forms';
import { ColorfulBg } from './directives/colorful-bg';
import { CapitalizationPipe } from './pipes/capitalization-pipe';
import { MathModule } from './modules/math/math-module';

// You can think of an Angular module like a folder in your project that tells Angular what;s inside it and how the pieces work together.
@NgModule({
  // components/directives/pipes belong to this module
  declarations: [App, Custom, Course, Navbar, ColorfulBg, CapitalizationPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MathModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
