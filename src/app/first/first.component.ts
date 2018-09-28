import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "../data.service";
import { Appurl } from "../appurl";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.scss"]
})
export class FirstComponent implements OnInit, OnDestroy {
  items: Appurl[];
  firsturl: Subscription;
  constructor(private data: DataService) {
    this.firsturl = data.geturl().subscribe(items => {
      this.items = items.filter(item => {
        if (item.page == 1) {
          return item;
        }
      });
    });
  }
  ngOnDestroy(): void {
    this.firsturl.unsubscribe();
  }
  ngOnInit() {}
}
