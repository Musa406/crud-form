import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { OperationalPeriodsComponent } from '../operational-periods/operational-periods.component';

const routes: Routes = [
  { path: '', redirectTo:'operationalPeriods', pathMatch:'full' },
  { path: 'operationalPeriods', component: OperationalPeriodsComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
