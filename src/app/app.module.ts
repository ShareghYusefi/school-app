import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { CourseComponent } from './course/course.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CustomComponent, CourseComponent],
  imports: [BrowserModule, AppRoutingModule, MatSlideToggleModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
