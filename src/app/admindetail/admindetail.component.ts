import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "../data.service";
import { NgForm } from "@angular/forms";
import { Appurl } from "../appurl";

@Component({
  selector: "app-admindetail",
  templateUrl: "./admindetail.component.html",
  styleUrls: ["./admindetail.component.scss"]
})
export class AdmindetailComponent implements OnInit {
  items: Appurl[];
  admin: Subscription;
  editMode: boolean = false;
  currentUrlId: string;
  constructor(private data: DataService) {
    this.admin = data.geturl().subscribe(items => {
      this.items = items;
    });
  }
  ngOnDestroy(): void {
    this.admin.unsubscribe();
  }
  linkadd(form: NgForm) {
    if (this.editMode) {
      this.data.editurl(this.currentUrlId, form.value);
    } else {
      this.data.posturl(form.value);
    }
    this.linkclear(form);
  }
  linkedit(form, item) {
    this.editMode = true;
    let appurl = { url: item.url, page: item.page };
    this.currentUrlId = item.id;
    form.setValue(appurl);
  }

  linkclear(form) {
    form.reset();
    this.editMode = false;
    form.form.patchValue({ page: 1 });
  }
  linkdelete(form) {
    this.data.deleteurl(this.currentUrlId);
    this.linkclear(form);
  }
  ngOnInit() {}
}
