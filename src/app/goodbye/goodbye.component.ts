import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goodbye',
  templateUrl: './goodbye.component.html',
  styleUrls: ['./goodbye.component.css']
})
export class GoodbyeComponent implements OnInit {
  id: string;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(data => {
      // The id property on data is set because of the route structure in app-routing.module.ts
      this.id = data.id;
      console.log(data);
    });
  }

}
