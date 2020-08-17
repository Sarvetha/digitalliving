import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionsComponent } from './Components/solutions/solutions.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

const routes: Routes = [
  {
    path: 'solutions',
    component: SolutionsComponent
  },
  {
    path:'aboutUs',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SolutionsComponent, AboutUsComponent]
