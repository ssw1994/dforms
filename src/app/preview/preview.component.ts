import { Component, OnInit } from "@angular/core";
export interface IValidators {
  required: boolean;
  pattern: RegExp;
  validator: Function;
}
export interface IStyleType {
  innerStyle: any;
  cssClass: any;
}
export interface IStyle {
  parent: IStyleType;
  self: IStyleType;
}
export interface IControl {
  controlName: string;
  control: string;
  type: string;
  placeholder: string;
  defaultValue: any;
  disabled: boolean;
  options: Array<any>;
  optionId: any;
  optionProperty: string;
  textTitle: string;
  validators: IValidators;
  style: IStyle;
}

export class Control implements IControl {
  controlName: string;
  control: string;
  type: string;
  placeholder: string;
  defaultValue: any;
  disabled: boolean;
  options: Array<any>;
  optionId: any;
  optionProperty: string;
  textTitle: string;
  validators: IValidators;
  style: IStyle;
  constructor(
    controlName = null,
    control = null,
    type = null,
    placeholder = null,
    defaultValue = null,
    disabled = false,
    options = [],
    optionId = null,
    optionProperty = null,
    validators = {
      required: false,
      pattern: null,
      validator: null
    } as IValidators,
    style = {
      parent: { innerStyle: null, cssClass: null } as IStyleType,
      self: { innerStyle: null, cssClass: null } as IStyleType
    } as IStyle
  ) {
    this.controlName = controlName;
    this.control = control;
    this.type = type;
    this.placeholder = placeholder;
    this.defaultValue = defaultValue;
    this.disabled = disabled;
    this.options = options;
    this.optionId = optionId;
    this.optionProperty = optionProperty;
    this.validators = validators;
    this.style = style;
  }
}

@Component({
  selector: "app-previewer",
  templateUrl: "preview.component.html",
  styleUrls: ["./preview.component.css"]
})
export class PreviewComponent implements OnInit {
  controlTypes: Array<string> = ["input", "select"];
  inputTypes:Array<string> = ['text','number','email','password','checkbox','radio'];
  control: Control = new Control();
  tempObj:any = {};
  constructor() {
    try {
      console.log(this.control);
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
    try {
    } catch (error) {
      console.error(error);
    }
  }
}
