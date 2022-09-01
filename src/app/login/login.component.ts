import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  data: any = {
    email: '',
    password: '123123',
    remember: true
  };

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  login(form: NgForm) {
    if (form.valid) {
      console.log('送出表單資料: ' + JSON.stringify(this.data));
      // this.http.post('/login', this.data).subscribe(() => {
      //   this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl') || '/');
      // });
    }
  }

}
