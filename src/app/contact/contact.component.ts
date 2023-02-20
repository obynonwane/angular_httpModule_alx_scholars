import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  email: string = '';
  password: string = '';

  message = {};

  @Output() messageData: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  sendMessage() {
    this.message = {
      email: this.email,
      password: this.password,
    };
    this.emitToParent();
    this.clearFormItem();
  }

  emitToParent() {
    this.messageData.emit(this.message);
  }

  clearFormItem() {
    this.email = '';
    this.password = '';
  }
}
