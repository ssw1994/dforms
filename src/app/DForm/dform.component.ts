import {Component, OnInit,Input, Output, EventEmitter,SimpleChange } from "@angular/core";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector:'dform',
  templateUrl:'dform.component.html',
  styleUrls:['./dform.component.css']
})
export class DformComponent implements OnInit{

  @Input()
    config:any;

  @Output()
    getForm:EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(){ 
    try{

    }catch(error){
      console.error(error);
    }
  }

  refreshForm(){
    try{

    }catch(error){
      console.error(error);
    }
  }

  ngOnInit(){

  }

  ngOnChanges(changes:SimpleChange){
    try{
      if(changes.hasOwnProperty('config')){
        this.refreshForm();
      }
    }catch(error){
      console.error(error);
    }
  }

}