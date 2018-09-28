import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "../data.service";
import { Subscription } from "rxjs";
import { Appurl } from "../appurl";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.scss"]
})
export class SecondComponent implements OnInit, OnDestroy {
  items: Appurl[];
  secondurl: Subscription;
  constructor(private data: DataService) {
    this.secondurl = data.geturl().subscribe(items => {
      this.items = items.filter(item => {
        if (item.page != 1) {
          return item;
        }
      });
    });
  }
  ngOnDestroy(): void {
    this.secondurl.unsubscribe();
  }
  ngOnInit() {}
}
