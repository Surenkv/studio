import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Url {
  url: string;
  page: number;
}
export interface UrlId extends Url {
  id: string;
}

@Injectable({
  providedIn: "root"
})
export class DataService {
  private urlCollection: AngularFirestoreCollection<Url>;
  urls: Observable<UrlId[]>;

  constructor(private db: AngularFirestore) {
    this.urlCollection = db.collection<Url>("appurl");
    this.urls = this.urlCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Url;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  geturl() {
    return this.urls;
  }
  posturl(appurl: Url) {
    this.urlCollection.add(appurl);
  }
  editurl(id: string, appurl: Url) {
    this.urlCollection.doc(id).update(appurl);
  }
  deleteurl(id: string) {
    this.urlCollection.doc(id).delete();
  }
}
