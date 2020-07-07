import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-forms-td-start',
  templateUrl: './forms-td-start.component.html',
  styleUrls: ['./forms-td-start.component.css']
})
export class FormsTdStartComponent {
  /*
  * An alternative way to access NgForm object rather than passing a ref
  * directly to handler (onSubmit()) in template, we can access the same object
  * (given its ref is assigned to ngForm) via @ViewChild() directive
   */
  @ViewChild('formElementX') form: NgForm;
  secretAnsw = '';
  genders = ['male', 'female', 'apache_helicopter'];

  user = {
    username: '',
    email: '',
    secret: '',
    secretAnsw: '',
    gender: ''
  };

  suggestUserName() {
    /*
    * though this can be done via two-way binding
    * another approach exist
     */

    const suggestedName = 'Superuser';


    // this.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   secretAnsw: 'secretAnsw is set manually via setValue()',
    //   gender: 'male'
    // });

    /*
    * this.form is an NgForm, it is a container/wrapper and
    * for some reason it has a "form " property with additional methods
    * reason why can't we have all ther equired methods
    * exactly on wrapper is unknown
    * but still there are plenty of useful emthods
    * there, like:
     */
    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

    /*
    * this will work in terms that it will update the DOM, but Ngform model
    * will not be updated, thus thi changes will not get picked by submit handler
     */
  suggestUserNameDirectly(username: HTMLInputElement) {
    username.value = "name added directly"
  }

  suggestSecretAnsw() {
    this.form.form.patchValue({secretAnsw: "Set via accessign form, valid"})
  }

  suggestSecretAnswDirectly(textarea) {
    textarea.value = "set directly and will not affect form object (incorrect, only updates html)"
  }

  suggestSecretAnswByTwoWayBinding() {
      this.secretAnsw = `set by modifying this.secretAnsw, which is two-way bound by [(ngModel)]
        this will correctly push changes to form object, thus valid as well`
    }

  onSubmit(formElementX: NgForm) {
    console.log("\n======form passed via argument======");
    console.log(formElementX);
    console.log("\n======form accessed via @ViewChild()======");
    console.log(this.form);
    // console.log(formElementX.controls.userData.controls.email.invalid);

    this.user.username = this.form.value.userData.username;

    // this.form.reset(); // can reset to special values if provided in argument

  }



  /*
  * This way can be used if forms need to be accessed before submission
   */
  // onSubmit(formElementX: NgForm) {
  //   console.log(this.form);
  // }
}
