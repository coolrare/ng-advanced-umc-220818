import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

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
