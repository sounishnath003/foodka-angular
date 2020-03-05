import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { inject } from "@angular/core/testing";

@Component({
  selector: "app-scheduleDate",
  templateUrl: "./scheduleDate.component.html",
  styleUrls: ["./scheduleDate.component.css"]
})
export class ScheduleDateComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ScheduleDateComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {}
}
