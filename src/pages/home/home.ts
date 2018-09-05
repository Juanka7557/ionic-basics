import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from "../users/users";
import {ShopPage} from "../shop/shop";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userPage:any;
  shopPage:any;
  constructor(public navCtrl: NavController) {
    this.userPage = UsersPage;
    this.shopPage=ShopPage;
  }

}
