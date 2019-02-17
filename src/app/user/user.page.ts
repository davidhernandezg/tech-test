import { UsersService } from './../../providers/users/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public user: User;

  constructor(private userService: UsersService) {
    console.log("Entra en constructor UserPage");
  }

  ngOnInit() {
    this.user = this.userService.selected;
    console.log(this.user);
  }

}
