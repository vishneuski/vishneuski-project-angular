import {Injectable} from '@angular/core';
import {Message} from "../models/message";

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class ContactsService {

  fbMessagesCollection: AngularFirestoreCollection<Message>;
  fbMessageDoc: AngularFirestoreDocument<Message>;

  fbMessages: Observable<Message[]>;
  fbMessage: Observable<Message>;

  constructor(
    private afs: AngularFirestore,
  ) {
    this.fbMessagesCollection = this.afs.collection('messages', ref => ref.orderBy('email', 'asc'));
  }

  getfbMessages(): Observable<Message[]> {
    this.fbMessages = this.fbMessagesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Message;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
    return this.fbMessages;
  }

  getfbMessage(id: string): Observable<Message> {
    this.fbMessageDoc = this.afs.doc<Message>(`message/${id}`);
    this.fbMessage = this.fbMessageDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Message;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.fbMessage;
  }

  addMessage(message: Message) {
    console.log('!!!!');
    this.fbMessagesCollection.add(message);
  }

  deleteMessage(message: Message) {
    this.fbMessageDoc = this.afs.doc(`messages/${message.id}`);
    this.fbMessageDoc.delete();
  }
}
