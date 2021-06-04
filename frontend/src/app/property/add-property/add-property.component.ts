import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IPropertyBase } from 'src/app/model/ipropertybase';



@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertForm:NgForm;
@ViewChild('formTabs') formTabs: TabsetComponent;

propertyTypes:Array<string> =['House', 'Appartment', 'Duplex']
furnishTypes:Array<string> =['Fully', 'Semi', 'Unfurnished']
readytoMove:Array<string>=['Yes','No']
gatedCommunity:Array<string>=['Yes','No']
readyToMoveenws:Array<string>=['East','West','South','North']


propertyView: IPropertyBase = {
  Id: null,
  Name: '',
  Price: null,
  SellRent: null,
  PType:null,
  FType:null,
  BHK:null,
  BuiltArea:null,
  City:null,
  RTM:null
};

  constructor(private router: Router) { }

  ngOnInit() {

  }
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit()
  {
  console.log('Congrats, Form Submitted');
  console.log(this.addPropertForm);
  }

}
