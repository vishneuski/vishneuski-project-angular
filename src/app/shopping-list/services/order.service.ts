import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {FlashMessagesService} from "angular2-flash-messages";
import {Order} from "../../models/order";
import {Observable} from "rxjs/index";
import {map} from "rxjs/operators";

@Injectable()
export class OrderService {

  fbOrdersCollection: AngularFirestoreCollection<Order>;
  fbOrderDoc: AngularFirestoreDocument<Order>;
  fbOrders: Observable<Order[]>;
  fbOrder: Observable<Order>;

  constructor(
    private afs: AngularFirestore,
    private flashMessage: FlashMessagesService
  ) {
    this.fbOrdersCollection = this.afs.collection('orders', ref => ref.orderBy('email', 'asc'));
  }


  getfbOrders(): Observable<Order[]> {
    this.fbOrders = this.fbOrdersCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Order;
          console.log(data, ' orders data in FireBase');
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );

    return this.fbOrders;
  }

  addOrder(order: Order) {
    console.log(order);
    this.fbOrdersCollection.add(order);
  }
}
