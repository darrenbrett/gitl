import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Users } from '../pages/users/users';
import { Repos } from '../pages/repos/repos';
import { Orgs } from '../pages/orgs/orgs';
import { UserDetails } from '../pages/user-details/user-details';
import { GithubUsers } from '../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    Users,
    Repos,
    Orgs,
    UserDetails
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Users,
    Repos,
    Orgs,
    UserDetails
  ],
  providers: [ GithubUsers ]
})
export class AppModule {}
