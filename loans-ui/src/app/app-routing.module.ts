import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // Load new User Page Without Lazy Loading because they need to be Access by ALL
  { path: 'register', component: NewUserComponent },
  // Load Login Page Without Lazy Loading because they need to be Access by ALL
  { path: 'login', component: LoginComponent },
  // Load forgot-password Page Without Lazy Loading because they need to be Access by ALL
  { path: 'forgot-password', component: ForgotPasswordComponent },
  // Load Logout Page Without Lazy Loading because they need to be Access by ALL
  { path: 'logout', component: LogoutComponent },
  // Load Dashboard Page Without Lazy Loading because they need to be Access by ALL
  { path: 'dashboard', component: DashboardComponent },

  // Load the Customers route with Lazy Loading
  { path: 'customer', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  // Load the Paymentss route with Lazy Loading
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  // Load the Invoices route with Lazy Loading
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  // Load the Loans route with Lazy Loading
  { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) },
  // Load the Settingss route with Lazy Loading
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  // Load the Loans-Plans route with Lazy Loading
  { path: 'loan-types', loadChildren: () => import('./loan-types/loan-types.module').then(m => m.LoanTypesModule) },
  // Load the reports route with Lazy Loading
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  // Load the Activity route with Lazy Loading
  { path: 'activity', loadChildren: () => import('./audit-log/audit-log.module').then(m => m.AuditLogModule) },

  // Load Page-Not-Found 404Page Without Lazy Loading because they need to be Access by ALL
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
