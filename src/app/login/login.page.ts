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

  async presentAlert(errNo) {
    var errorMessage = "";

    if (errNo == 400) {
      errorMessage = "Incorrect email."      
    }
    else if (errNo == 401) {
      errorMessage = "Incorrect password."      
    }
    else if (errNo == 402) {
      errorMessage = "Please try again."      
    }

    const alert = await this.alertCtrl.create({
    header: "Error",
    subHeader: errorMessage,
    buttons: ['Dismiss']
   });
   await alert.present(); 
}
  
  login() {
    this.httpClient.post("http://localhost:3000/api/users/authentication", this.user).subscribe(
      (response: any) => {
        this.navCtrl.navigateForward("tabs/tab1", {
          queryParams: {
            userId: response.id
          }
        });
      },
      (err) => {
        this.presentAlert(err.status);
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
