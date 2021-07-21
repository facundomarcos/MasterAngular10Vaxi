import { Component, OnInit } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromDictionaries from './store/dictionaries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-angular-app';

 // constructor(private fs: AngularFirestore){}
 //este objeto tiene acceso a toda la data del store
  constructor(private store: Store<fromRoot.State>){}

  ngOnInit(){
    // this.fs.collection('test').snapshotChanges().subscribe( personas => {
    //   console.log(personas.map( x => x.payload.doc.data()));
    // })
    //dispara el evento para leer firebase y la almacene en el store
    this.store.dispatch(new fromDictionaries.Read());
  }




}
