import { Component, OnInit } from '@angular/core';

import {HomeService} from "../../../services/home.service";
import {CategoryService} from "../../../services/category.service";
import {Home} from "../../../models/home";

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  home!: Home[]

  constructor(private homeService: HomeService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {

    this.homeService.getAll().subscribe(result => {
      // @ts-ignore
      this.home = result
      console.log(result)
    }, error => {
      console.log(error)
    })
    this.categoryService.getAll().subscribe(result => {
      // @ts-ignore
      this.category = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }

}
