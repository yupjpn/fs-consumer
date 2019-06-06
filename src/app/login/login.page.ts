import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: any = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }

  constructor(private navCtrl: NavController, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  login() {

    this.httpClient.post("http://localhost:3000/api/users/authentication", this.user).subscribe(
      (response) => {
        console.log(response);
      }
    );

  }

  navToTabs() {
    this.navCtrl.navigateForward('tabs/tab1');
  }

  navToRegistration() {
    this.navCtrl.navigateForward('registration');
  }

}
