import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { inject } from "@angular/core/testing";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-scheduleDate",
  templateUrl: "./scheduleDate.component.html",
  styleUrls: ["./scheduleDate.component.css"]
})
export class ScheduleDateComponent implements OnInit {
  public scheduleFormm: FormGroup;

  public scheduleForm: FormGroup = new FormGroup({
    date: new FormControl("", Validators.required),
    time: new FormControl("", Validators.required)
  });

  constructor(
    public dialogRef: MatDialogRef<ScheduleDateComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    let scheduleFormm: FormGroup = new FormGroup({
      date: new FormControl("", Validators.required),
      time: new FormControl("", Validators.required)
    });

    this.scheduleForm = scheduleFormm;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
