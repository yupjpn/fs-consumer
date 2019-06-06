import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';

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

  constructor(private navCtrl: NavController, private httpClient: HttpClient,
              private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
    message: 'Error',
    subHeader: 'Please try again later.',
    buttons: ['Dismiss']
   });
   await alert.present(); 
}
  
  login() {

    this.httpClient.post("http://localhost:3000/api/users/authentication", this.user).subscribe(
      (response) => {
        console.log(response);
        if (response) {
          this.navToTabs();
        }
        else {
          this.presentAlert();
        }
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
