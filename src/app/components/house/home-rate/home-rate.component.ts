import { Component, OnInit } from '@angular/core';
import {Home} from "../../../models/home";
import {HomeService} from "../../../services/home.service";

@Component({
  selector: 'app-home-rate',
  templateUrl: './home-rate.component.html',
  styleUrls: ['./home-rate.component.css']
})
export class HomeRateComponent implements OnInit {
  home!: Home[]
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getRate().subscribe(result => {
      // @ts-ignore
      this.home = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }

}
