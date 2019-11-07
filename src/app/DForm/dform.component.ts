import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChange
} from "@angular/core";

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "dform",
  templateUrl: "dform.component.html",
  styleUrls: ["./dform.component.css"],
  providers: [FormBuilder]
})
export class DformComponent implements OnInit {
  @Input()
  config: any;

  @Output()
  getForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  dform: FormGroup;

  constructor(private fb: FormBuilder) {
    try {
      this.dform = this.fb.group({});
      this.dform.valueChanges.subscribe(
        form => {
          console.log(this.dform);
        },
        error => {
          console.error(error);
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @author SSW
   * @description this function is used for updating checkbox value
   */
  updateCheckBoxValue(event: any,prop: { controlName: string }, ) {
    try {
      console.log(prop, event);
      //this.dform.get(prop.controlName).setValue(event.checked);
      this.dform.get(prop.controlName).patchValue(event.target.checked ? true : false);
      // this.dform.get(prop.controlName).updateValueAndValidity({onlySelf:true,emitEvent:false})
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @author SSW
   * @description this function is used for creating reactive form
   */
  createForm() {
    try {
      if (
        this.config &&
        this.config.formConfig &&
        this.config.formConfig.controls &&
        this.config.formConfig.controls.length > 0
      ) {
        this.config.formConfig.controls.forEach((control, index) => {
          let fcontrol = this.fb.control({
            value: control.defaultValue,
            disabled: control.disabled
          });
          if (
            control.validators &&
            Object.keys(control.validators).length > 0
          ) {
            let fcontrolValidator = control.validators;
            let validator = [];
            if (fcontrolValidator.required) {
              validator.push(Validators.required);
            }
            if (fcontrolValidator.pattern) {
              validator.push(Validators.pattern(fcontrolValidator.pattern));
            }
            fcontrol.setValidators(validator);
          }
          if (!this.dform.get(control.controlName))
            this.dform.addControl(control.controlName, fcontrol);
          else this.dform.setControl(control.controlName, fcontrol);
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  getError(control: any) {
    try {
      let keys = Object.keys(control.validators);
      for (let i = 0; i < keys.length; i++) {
        if (this.dform.get(control.controlName)) {
          if (
            this.dform.get(control.controlName).hasError(keys[i]) &&
            this.dform.get(control.controlName).touched
          ) {
            return `Error - ${control.controlName} - ${keys[i]}`;
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  renderForm() {
    try {
      this.createForm();
      this.dform.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChange) {
    try {
      if (changes.hasOwnProperty("config")) {
        this.renderForm();
      }
    } catch (error) {
      console.error(error);
    }
  }
}
