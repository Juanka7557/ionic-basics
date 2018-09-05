import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserPage} from "./user/user";

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  ionViewCanEnter(): boolean | Promise<boolean> {

    const rnd = Math.random();
    console.log('ionViewCanEnter ');
    console.log(rnd);
    return (rnd > 0.1);
  }

  ionViewWillEnter(){
    console.log('ionViedWillEnter');
  }

  ionViewCanLeave(): boolean|Promise<any>{
    const promise = new Promise((resolve, reject) => {
      setTimeout(    () => {
        resolve();
      },1000);
    });

    return promise;
  }

  onLoadUser(name: string):void {
    this.navCtrl.push(UserPage, {userName:name});
  }
}
