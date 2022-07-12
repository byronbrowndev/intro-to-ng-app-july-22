import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  // 3 members (string)
  // holds title
  @Input() title: string = 'Feature';
  // holds icon
  @Input() icon: string = 'science';
  // description
  @Input() description: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at sit placeat iure error? Optio ullam id et
  quos iure, sequi, magnam beatae ea, officia quasi delectus repellat molestias. Reprehenderit.`

  constructor() { }

  ngOnInit(): void {
  }

}
