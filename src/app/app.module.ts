import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { AdminComponent } from "./admin/admin.component";
import { NavComponent } from "./nav/nav.component";
import { PageComponent } from "./page/page.component";
import { DataService } from "./data.service";
import { AdminnavComponent } from "./adminnav/adminnav.component";
import { AdmindetailComponent } from "./admindetail/admindetail.component";
import { NotfoundComponent } from "./notfound/notfound.component";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    AdminComponent,
    NavComponent,
    PageComponent,
    AdminnavComponent,
    AdmindetailComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
