import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
import { RoleGuard } from './guards/role-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
      { path: 'categories', loadComponent: () => import('./components/categories/categories.component').then(m => m.CategoriesComponent) },
      { path: 'categories/:id', loadComponent: () => import('./components/categories/category-detail/category-detail.component').then(m => m.CategoryDetailComponent) },
      { path: 'products', loadComponent: () => import('./components/products/product-list/product-list.component').then(m => m.ProductListComponent) },
      { path: 'products/:id', loadComponent: () => import('./components/products/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },
      { path: 'search', loadComponent: () => import('./components/products/search/search.component').then(m => m.SearchComponent) },
      { path: 'groups', loadComponent: () => import('./components/groups/group-list/group-list.component').then(m => m.GroupListComponent) },
      { path: 'groups/:id', loadComponent: () => import('./components/groups/group-detail/group-detail.component').then(m => m.GroupDetailComponent) },
      { path: 'my-groups', loadComponent: () => import('./components/groups/my-groups/my-groups.component').then(m => m.MyGroupsComponent), canActivate: [AuthGuard] },
      { path: 'comment-ca-marche', loadComponent: () => import('./components/comment-ca-marche/comment-ca-marche.component').then(m => m.CommentCaMarcheComponent) },
      { path: 'cart', loadComponent: () => import('./components/checkout/cart/cart.component').then(m => m.CartComponent), canActivate: [AuthGuard] },
      { path: 'payment', loadComponent: () => import('./components/checkout/payment/payment.component').then(m => m.PaymentComponent), canActivate: [AuthGuard] },
      { path: 'profile', loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent), canActivate: [AuthGuard] },
      { path: 'dashboard/member', loadComponent: () => import('./components/dashboard/member-dashboard/member-dashboard.component').then(m => m.MemberDashboardComponent), canActivate: [AuthGuard, RoleGuard], data: { role: 'member' } },
      { path: 'dashboard/supplier', loadComponent: () => import('./components/dashboard/supplier-dashboard/supplier-dashboard.component').then(m => m.SupplierDashboardComponent), canActivate: [AuthGuard, RoleGuard], data: { role: 'supplier' } },
      { path: 'dashboard/admin', loadComponent: () => import('./components/dashboard/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent), canActivate: [AuthGuard, RoleGuard], data: { role: 'admin' } }
    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      { path: 'login', loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent) },
      { path: 'register', loadComponent: () => import('./components/auth/register/register.component').then(m => m.RegisterComponent) },
      { path: 'forgot-password', loadComponent: () => import('./components/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
];