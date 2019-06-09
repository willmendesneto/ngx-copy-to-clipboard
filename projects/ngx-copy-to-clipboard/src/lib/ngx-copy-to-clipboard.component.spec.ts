import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import ClipboardJS from 'clipboard';

import { NgxCopyToClipboardComponent } from './ngx-copy-to-clipboard.component';

@Component({
  selector: 'ngx-container',
  template: `
    <section>
      <div id="html-content"><h3>This should be copied</h3></div>
      <hr />
      <code>{{ copiedText || 'Your text will be pasted here...' }}</code>
      <hr />
      <ngx-copy-to-clipboard
        target="#html-content"
        action="copy"
        [success]="onSuccess"
        [error]="onError"
        >Copy</ngx-copy-to-clipboard
      >
    </section>
  `,
})
class ContainerComponent {
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

describe('NgxCopyToClipboardComponent', () => {
  let fixture: any;

  beforeEach(async(() => {
    spyOn(Date, 'now').and.returnValue(1545343685559);
    fixture = TestBed.configureTestingModule({
      declarations: [ContainerComponent, NgxCopyToClipboardComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(ContainerComponent);
    fixture.detectChanges();
  }));

  it('should add styles based on circle class on the skeleton components', () => {
    expect(
      fixture.nativeElement.querySelectorAll('.ngx-copy-to-clipboard-copy-1545343685559').length,
    ).toBe(1);
  });
});
