import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxCopyToClipboardModule } from '../../projects/ngx-copy-to-clipboard/src/lib/ngx-copy-to-clipboard.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, NgxCopyToClipboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
