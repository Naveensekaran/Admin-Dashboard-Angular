import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
    item: string = 'Users';
    users!:User[];
  constructor(private userService: UserService, private router : Router){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUserList().subscribe(data=>{
      this.users= data;  
    });
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(data=>{
      console.log("Deleted");
      this.getUsers();
    })
  }


}
