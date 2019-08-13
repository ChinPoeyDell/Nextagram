import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  images
  
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    let userId = this.route.snapshot.params.userId
    this.userService.getImage(userId).subscribe((image) => {
      this.images = image
    })
  }

}
