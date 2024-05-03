import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent {
  item: string = 'New Login';

  user: User= new User();

  constructor(private userService: UserService, private router: Router){ }

  ngOnInit(): void {
   
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }
  goToUserList(){
    this.router.navigate(['/dashboard'])
  }

  onSubmit(form : NgForm){
    console.log(form);
    this.saveUser();
  }
}
