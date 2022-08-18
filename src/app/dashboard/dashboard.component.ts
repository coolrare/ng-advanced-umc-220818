import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
  }

  gotoPage1(type: number, name: string) {
    this.router.navigateByUrl(
      '/utils/colors/' + type + '?name=' + name);
  }

  gotoPage2(type: number, name: string) {
    this.router.navigate(['/utils/colors/', type], {
      queryParams: {
        name: name
      }
    });
  }

}
