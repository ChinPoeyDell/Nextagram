import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.users = user
    })
  }


}
