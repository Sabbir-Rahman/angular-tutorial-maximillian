import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assingment3',
  templateUrl: './assingment3.component.html',
  styleUrls: ['./assingment3.component.css']
})
export class Assingment3Component implements OnInit {

  isVisible = false 
  p_name = ''
  items: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  changeVisiblity() {
    this.isVisible = this.isVisible == false ? true : false
    console.log(this.isVisible)
  }

  addItem() {
    this.items.push(this.p_name)
  }
  getColor() {
    return this.items.length === 2 ? 'blue': 'white'
  }
}
