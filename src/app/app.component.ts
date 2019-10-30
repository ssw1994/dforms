import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  config:any;
 
  constructor(){
    try{
      this.config = {
        formConfig:{
          controls:[
            {
              controlName:"username",
              control:"input",
              type:'text',
              placeholder:"Enter Username..",
              defaultValue:null,
              disabled:false,
              validators:{
                required:true,
                pattern:/^[a-zA-Z]$/,
                custom:{
                  name:()=>{

                  }
                }
              },
              style:{
                parent:{
                    innerStyle:{
                      "background":"#eeefff",
                      "padding":"10px"
                    },
                    cssClass:{
                      "col-md-12 col-sm-12 col-xs-12":true
                    }
                  },
                  self:{
                    innerStyle:{
                      "width":"100%",
                      "font-family":"courier",
                      "font-size":"15px",
                      "color":"blue",
                      "border":"0px 0px 0px 0px"
                    },
                    cssClass:{

                    }
                  }
              }
            },
            {
              controlName:"Password",
              control:"input",
              type:'text',
              placeholder:"Enter Password..",
              defaultValue:null,
              disabled:false,
              validators:{
                required:true,
                pattern:/^[a-zA-Z]$/,
                custom:{
                  name:()=>{

                  }
                }
              },
              style:{
                parent:{
                    innerStyle:{
                      "background":"#eeefff",
                      "padding":"10px"

                    },
                    cssClass:{
                      "col-md-12 col-sm-12 col-xs-12":true
                    }
                  },
                  self:{
                    innerStyle:{
                      "width":"100%",
                      "font-family":"courier",
                      "font-size":"15px",
                      "color":"blue"
                    },
                    cssClass:{

                    }
                  }
              }
            }
          ]
        }
      }
    }catch(error){
      console.error(error);
    }
  }
}
