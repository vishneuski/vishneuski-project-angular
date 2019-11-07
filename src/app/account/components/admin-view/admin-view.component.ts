import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../../contacts/models/message";

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  @Input()
  messages: Message[];

  @Output()
  deleteMessage: EventEmitter<Message> = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() {
  }

  deleteMessage(message) {
    this.deleteMessage.emit(message)
  }
}
