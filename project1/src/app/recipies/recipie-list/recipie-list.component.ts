import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe('A Test Recipie', 'This is simply a test', 'https://c4.wallpaperflare.com/wallpaper/778/966/360/olives-lettuce-greek-cooking-wallpaper-preview.jpg'),
    new Recipe('Recipie 2', 'This is simply a test 2', 'https://media.istockphoto.com/photos/assorted-indian-recipes-food-various-picture-id922783734?k=20&m=922783734&s=612x612&w=0&h=_oV4oOrb8kC4RVgAI6RrGfQ8lIKsnP89lwwjHfhxUzQ='),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
