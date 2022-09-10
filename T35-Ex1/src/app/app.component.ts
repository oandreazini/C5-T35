import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'T35-Ex1';

  name: string = '';
  CIF: string = '';
  direction: string = '';
  group: string = '';
  client: Array<object> = [];

  constructor() {}

  createForm(){
    this.client.push({
      name: this.name,
      CIF: this.CIF,
      direction: this.direction,
      group: this.group,
      
    });
  }
  ngOnInit(): void {
    this.createForm();
  }

}


