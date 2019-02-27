import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { GoodbyeComponent } from './goodbye/goodbye.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hello', component: HelloComponent },
  // putting the colon before a segment in our path (like :id) makes is a parameter
  // We can now fetch it from Angular's ActivatedRoute service.
  // An example of this is in goodbye.component.ts
  { path: 'goodbye/:id', component: GoodbyeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
