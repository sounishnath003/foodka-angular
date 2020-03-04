import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-foodSearch",
  templateUrl: "./foodSearch.component.html",
  styleUrls: ["./foodSearch.component.css"]
})
export class FoodSearchComponent implements OnInit {
  myControl = new FormControl("", [
    Validators.required,
    Validators.pattern(/^[A-Za-z]+$/)
  ]);
  options: string[] = [
    "Kolkata",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Bangalore",
    "Jaipur"
  ];

  constructor() {}

  ngOnInit() {}
}
