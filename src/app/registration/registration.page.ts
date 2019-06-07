import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public user: User;

  constructor(private navCtrl: NavController, private httpClient: HttpClient,
    private alertCtrl: AlertController) {
    // initialize user with blank fields  
    this.user = new User("", "", "", "");
    }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
    header: "Error",
    subHeader: "Could not register. The email you entered may already be taken.",
    buttons: ['Dismiss']
    });
    await alert.present(); 
}

  // this function only gets called once the four registration fields have been filled
  submit() {
    console.log("Submitting to the server...");
    console.log(this.user);
    
      this.httpClient.post("http://localhost:3000/api/users", this.user).subscribe(
        (response: any) => {
          console.log(response);
          this.navToTabs();
        },
        (err) => {
          console.log(err);
          this.presentAlert();
        }
      );      
  }  

  navToTabs() {
    this.navCtrl.navigateForward('tabs/tab1');
  }

  ngOnInit() {
  }

}
