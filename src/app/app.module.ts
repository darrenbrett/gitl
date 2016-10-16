import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Users } from '../pages/users/users';
import { Repos } from '../pages/repos/repos';
import { Orgs } from '../pages/orgs/orgs';

@NgModule({
  declarations: [
    MyApp,
    Users,
    Repos,
    Orgs
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Users,
    Repos,
    Orgs
  ],
  providers: []
})
export class AppModule {}
