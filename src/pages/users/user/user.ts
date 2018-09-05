import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit{

  name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoBack():void{
    //this.navCtrl.pop();
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  ngOnInit(): void {
    this.name=this.navParams.get('userName');
  }

}
