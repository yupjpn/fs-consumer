import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

public email: string = "";
public password: string = "";

  constructor(private navCtrl: NavController, private httpClient: HttpClient,
              private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(errNo) {
    var errorMessage = "";

    if (errNo == 400) {
      errorMessage = "Incorrect login information."      
    }

    const alert = await this.alertCtrl.create({
    header: "Error",
    subHeader: errorMessage,
    buttons: ['Dismiss']
   });
   await alert.present(); 
}
  
  login() {

    const authReq = {
      email: this.email,
      password: this.password
    };

    this.httpClient.post("http://localhost:3000/api/users/authentication", authReq).subscribe(
      (response: any) => {
        
        // response is an array at the moment, which is why it doesn't have a .id property
        const userId = response.id;

        console.log(response);
        console.log(userId)

        localStorage.setItem("user_id", userId);

        this.navCtrl.navigateForward("tabs/tab1", {
          queryParams: {
            user_id: userId
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
