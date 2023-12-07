import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'movie',
    component: MovieComponent
  },
  {
    path: '**',
    component: LandingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
