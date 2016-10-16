import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Users } from '../pages/users/users';
import { Repos } from '../pages/repos/repos';
import { Orgs } from '../pages/orgs/orgs';
import { GithubUsers } from '../providers/github-users';

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
  providers: [ GithubUsers ]
})
export class AppModule {}
