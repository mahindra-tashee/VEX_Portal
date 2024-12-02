import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { AdminMastersComponent } from './admin-masters/admin-masters.component';
import { ResourceMastersComponent } from './resource-masters/resource-masters.component';
import { IncidentMastersComponent } from './incident-masters/incident-masters.component';
import { PlanMastersComponent } from './plan-masters/plan-masters.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { DepartmentComponent } from './department/department.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin-master', component: AdminMastersComponent },
  { path: 'resource-master', component: ResourceMastersComponent },
  { path: 'plan-master', component: PlanMastersComponent },
  { path: 'incident-master', component: IncidentMastersComponent },
  { path: 'notification-setting', component: NotificationSettingComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'user-management', component: UserManagementComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
