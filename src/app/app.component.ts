import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  config: any;

  constructor() {
    try {
      this.config = {
        formConfig: {
          controls: [
            {
              controlName: "username",
              control: "input",
              type: "text",
              placeholder: "Enter Username..",
              defaultValue: null,
              disabled: false,
              options: [],
              optionId: null,
              optionProperty: null,
              textTitle: null,
              validators: {
                required: true,
                pattern: null,
                custom: {
                  name: (iForm: FormGroup) => {
                    return null;
                  }
                }
              },
              style: {
                parent: {
                  innerStyle: {
                    background: "#eeefff",
                    padding: "10px"
                  },
                  cssClass: {
                    "col-md-12 col-sm-12 col-xs-12": true
                  }
                },
                self: {
                  innerStyle: {
                    width: "100%",
                    "font-family": "courier",
                    "font-size": "15px",
                    color: "blue",
                    border: "0px 0px 0px 0px"
                  },
                  cssClass: {}
                }
              }
            },
            {
              controlName: "Password",
              control: "input",
              type: "password",
              placeholder: "Enter Password..",
              defaultValue: null,
              disabled: false,
              options: [],
              optionId: null,
              optionProperty: null,
              textTitle: null,
              validators: {
                required: true,
                pattern: null,
                custom: {
                  name: (iForm: FormGroup) => {
                    return null;
                  }
                }
              },
              style: {
                parent: {
                  innerStyle: {
                    background: "#eeefff",
                    padding: "10px"
                  },
                  cssClass: {
                    "col-md-12 col-sm-12 col-xs-12": true
                  }
                },
                self: {
                  innerStyle: {
                    width: "100%",
                    "font-family": "courier",
                    "font-size": "15px",
                    color: "blue"
                  },
                  cssClass: {}
                }
              }
            },
            {
              controlName: "student",
              control: "select",
              type: null,
              placeholder: "Select Student",
              defaultValue: null,
              disabled: false,
              options: [
                { roleId: 1, name: "Sagar" },
                { roleId: 2, name: "Sachin" },
                { roleId: 3, name: "Shubham" }
              ],
              optionId: "roleId",
              optionProperty: "name",
              textTitle: null,
              validators: {
                required: true,
                pattern: null,
                custom: {
                  name: (iForm: FormGroup) => {
                    return null;
                  }
                }
              },
              style: {
                parent: {
                  innerStyle: {
                    background: "#eeefff",
                    padding: "10px"
                  },
                  cssClass: {
                    "col-md-12 col-sm-12 col-xs-12": true
                  }
                },
                self: {
                  innerStyle: {
                    width: "100%",
                    "font-family": "courier",
                    "font-size": "15px",
                    color: "blue"
                  },
                  cssClass: {}
                }
              }
            },
            {
              controlName: "privacy",
              control: "input",
              type: "checkbox",
              placeholder: "Enter Username..",
              defaultValue: true,
              disabled: false,
              options: [],
              optionId: null,
              optionProperty: null,
              textTitle: "Remember Me",
              validators: {
                required: true,
                pattern: null,
                custom: {
                  name: (iForm: FormGroup) => {
                    return null;
                  }
                }
              },
              style: {
                parent: {
                  innerStyle: {
                    background: "#eeefff",
                    padding: "10px"
                  },
                  cssClass: {
                    "col-md-12 col-sm-12 col-xs-12 checkbox": true
                  }
                },
                self: {
                  innerStyle: {
                    width: "100%",
                    "font-family": "courier",
                    "font-size": "15px",
                    color: "blue",
                    border: "0px 0px 0px 0px"
                  },
                  cssClass: {}
                }
              }
            }
          ]
        }
      };
    } catch (error) {
      console.error(error);
    }
  }
}
