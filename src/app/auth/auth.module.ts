import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    RouterModule.forChild([
      {
        path: 'auth',
        component: AuthComponent,
      },
    ]),
    SharedModule,
    FormsModule,
  ],
  exports: [AuthComponent, RouterModule],
})
export class AuthModule {}
