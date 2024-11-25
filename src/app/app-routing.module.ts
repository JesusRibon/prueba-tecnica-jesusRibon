import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home' , component: HomeComponent, data: { breadcrumb: 'HOME'} 
  },
  {
    path: 'empresa' , component: CompanyInfoComponent, data: { breadcrumb: 'NOMBRE EMPRESA'} 
  },
  {
    path: 'articulo' , component: ArticleComponent, data: { breadcrumb: 'ARTICULO'} 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
