import { Component, OnInit } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromDictionaries from './store/dictionaries';
import * as fromUser from './store/user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-angular-app';
  isAuthorized$ !: Observable<boolean>;

 // constructor(private fs: AngularFirestore){}
 //este objeto tiene acceso a toda la data del store
  constructor(private store: Store<fromRoot.State>){}

  ngOnInit(){
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized))

    this.store.dispatch(new fromUser.Init());
    // this.fs.collection('test').snapshotChanges().subscribe( personas => {
    //   console.log(personas.map( x => x.payload.doc.data()));
    // })
    //dispara el evento para leer firebase y la almacene en el store
    this.store.dispatch(new fromDictionaries.Read());
  }

  onSignOut() : void {
    this.store.dispatch(new fromUser.SignOut());
  }




}
