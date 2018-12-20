import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  copiedText = '';

  constructor() {
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  onSuccess(e) {
    this.copiedText = e.text;
  }

  onError(e) {
    this.copiedText = 'Error trying to copy your text';
  }
}
