import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Courses } from './components/courses/courses';
import { NotFound } from './components/not-found/not-found';

const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'courses',
    component: Courses,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
