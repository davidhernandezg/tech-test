import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/providers/users/users.service';
import { User } from 'src/model/user';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public userService: UsersService,
    public navCtrl: NavController) {

  }

  ngOnInit() {
    console.log('Entra en ngOnInit() de HomePage');
    this.userService.getUsers()
      .subscribe(
        (data) => this.success(data),
        (error) => this.error(error),
        this.finally());
  }

  finally(): any {

  }

  error(arg0: any): any {

  }

  success(data: any): any {
    console.log(data);
    data.forEach(user => {
      console.log(user);
      this.userService.users.push(new User(user));
    });
    console.log(this.userService.users);
  }

  goUser(user: User): any {
    console.log("entra en goUser()");
    this.userService.selected = user;
    console.log(this.userService.selected);
    this.navCtrl.navigateForward('/user');
  }
}
