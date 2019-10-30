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
              validators:{
                required:true,
                pattern:/^[a-zA-Z]$/,
                custom:{
                  name:()=>{

                  }
                }
              },
              style:{
                innerStyle:{"font-size":"20px"},
                cssClass:"col-md-12 col-sm-12 col-xs-12",
                conditionalClasses:{}
              }
            }
          ]
        },
        styleConfig:{
          controls:[
            {
              controlName:'username',
              style:[
                {
                  
                }
              ]
            }
          ]
        }
      }
    }catch(error){
      console.error(error);
    }
  }
}
