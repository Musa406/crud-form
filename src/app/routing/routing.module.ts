import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../create-form/single-page-upsert.component';
import { AppComponent } from '../app.component';
import { OperationalPeriodsComponent } from '../operational-periods/operational-periods.component';

const routes: Routes = [
  { path: '', redirectTo:'operationalPeriods', pathMatch:'full' },
  { path: 'operationalPeriods', component: OperationalPeriodsComponent,
  children: [
    { path: 'create/:modelName', component: FormComponent }
  ]

  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
