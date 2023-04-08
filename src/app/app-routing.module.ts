import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { Expansion } from '@angular/compiler';

import { DynamicformeditComponent } from './dynamicformedit/dynamicformedit.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  
  {path:'form' , component : DynamicformComponent},
  {path:'editemp', component:DynamicformeditComponent},
  {path :"test", component : TestingComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DynamicformComponent]