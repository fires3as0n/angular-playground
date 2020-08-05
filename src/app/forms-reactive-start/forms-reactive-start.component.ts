import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './forms-reactive-start.component.html',
  styleUrls: ['./forms-reactive-start.component.css']
})
export class FormsReactiveStartComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames = ['gay', 'shit'];

  form: FormGroup;

  /*
  * GG said that during minification, properties can get minified
  * and since we are referencing the properties of an object
  * that is passed to new FormGroup() from the template
  * we need to be sure, that they will not change their name
  * during minification
  * that is why object properties are explicitly strings.
  *
  * He also said that will likely not likely happen
  * and I believe it will not, but lets stick to the lectures.
   */
  ngOnInit() {
    this.form = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(
          'Default username',
          [Validators.required, this.forbiddenNames.bind(this)],
          [this.forbiddenEmails]
        ),
        'email': new FormControl(null, [Validators.required, Validators.email, this.len]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });

    this.form.statusChanges.subscribe((value) => console.log(value))
    /*
    * Argument to subscription callback here will be this.form.value - very neat.
     */
    this.form.valueChanges.subscribe((value) => console.log(value))
  }

  len(control: FormControl): { [key: string]: boolean } {
    const errors = {
      lengthIsTooShort: false
    };

    if (control.value && control.value.length < 10) {
      errors.lengthIsTooShort = true
    }

    console.log(Object.values(errors).filter(value => value));

    if (Object.values(errors).filter(value => value).length > 0) {
      return errors;
    }
  }

  forbiddenNames(control: FormControl): { [key: string]: string } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': 'asdfgasdf' }
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(res => {
      setTimeout(() => {
        if (control.value === 'asd') {
          res( {
            'asdCheckFailed': true
          });
        } else {
          res(null);
        }
      }, 1500)
    });
    return promise;
  }

  getUserErrors() {
    return Object.keys(this.form.get('userData.username').errors)
  }

  setEmail() {
    this.form.get('userData.email').setValue('123456@12333');

    this.form.patchValue({
      userData: {
        username: 'hahahahaha'
      }
    })
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('hobbies')).push(control);
  }

  getHobbyControls() {
    return (<FormArray>this.form.get('hobbies')).controls;
  }


  /*
  * Getting form from local reference will not work anymore
   */
  onSubmit() {
    console.log(this.form);
  }
}
