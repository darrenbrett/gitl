import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Orgs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-orgs',
  templateUrl: 'orgs.html'
})
export class Orgs {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Orgs Page');
  }

}
