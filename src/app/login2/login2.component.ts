import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

function MyRequired(errMsg: string = '此欄位必填') {

  return function (c: AbstractControl) : ValidationErrors | null {
    return (c.value) ? null : { required: errMsg };
  }

}

function MyEmail(errMsg: string = '請填寫合法的 E-mail 格式') {

  return function (c: AbstractControl) : ValidationErrors | null {
    var result = Validators.email(c);
    if (result === null) {
      return null;
    } else {
      return { email: errMsg };
    }
  }

}


@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  data: any = {
    email: 'doggy.huang@gmail.com',
    password: '123123',
    remember: false
  };

  form!: UntypedFormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: this.fb.control('', {
        validators: [MyRequired('請填寫 E-mail 地址'), MyEmail()]
      }),
      password: this.fb.control('', {
        validators: [MyRequired(), Validators.minLength(6), Validators.maxLength(32)]
      }),
      remember: this.fb.control(true, {}),
      home_address: this.fb.group({
        city: this.fb.control('Taipei', {
          validators: [MyRequired()]
        }),
        district: this.fb.control('中山區', {
          validators: [MyRequired()]
        })
      })
    });

    this.form.reset(this.data);
    // this.form.setValue(this.data);
    // this.form.patchValue(this.data);

  }

  resetForm() {
    this.form.reset(this.data);
  }

  fc(name: string) {
    return this.form.get(name) as FormControl;
  }

  fg(name: string) {
    return this.form.get(name) as FormGroup;
  }

  fa(name: string) {
    return this.form.get(name) as FormArray;
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  login(form: FormGroupDirective) {
    if (form.valid) {
      console.log('送出表單資料: ' + JSON.stringify(this.data));
      // this.http.post('/login', this.data).subscribe(() => {
      //   this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl') || '/');
      // });
    }
  }

}
