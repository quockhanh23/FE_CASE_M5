import {Component, OnInit} from '@angular/core';
import {HomeService} from "../home.service";
import {CategoryService} from "../category.service";
import {Home} from "../models/home";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
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
