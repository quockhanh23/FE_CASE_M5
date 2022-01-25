import {Component, OnInit} from '@angular/core';
import {HomeService} from "../home.service";
import {ActivatedRoute} from "@angular/router";
import {Home} from "../models/home";
@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  home!: Home

  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.homeService.getAll().subscribe(result => {
      // @ts-ignore
      this.home = result
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
