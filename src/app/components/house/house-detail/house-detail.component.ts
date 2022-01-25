import { Component, OnInit } from '@angular/core';

import {HomeService} from "../../../services/home.service";
import {ActivatedRoute} from "@angular/router";
import {Home} from "../../../models/home";

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  home!: Home
  homes!: Home[]

  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.homeService.getAll().subscribe(result => {
      // @ts-ignore
      this.homes = result
      console.log(result)
    }, error => {
      console.log(error)
    })
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.homeService.getById(id).subscribe(res => {
        console.log(res)
        this.home = res
      })
    })
  }
}
