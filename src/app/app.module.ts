import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { CourseComponent } from './course/course.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ColorfulBgDirective } from './colorful-bg.directive';

@NgModule({
  declarations: [AppComponent, CustomComponent, CourseComponent, ColorfulBgDirective],
  imports: [BrowserModule, AppRoutingModule, MatSlideToggleModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
