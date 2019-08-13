import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  @Input() profileImage
  @Input() username
  @Input() userID

  constructor() { }

  ngOnInit() { }

}
