import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = {
  url: 'http://localhost:3000',
  options: {
    transportOptions: {
      polling: {
        extraHeaders: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiSWQiOjEsIlVzZXJuYW1lIjoiUmFqdSIsIkVtYWlsIjoicmFqdUBnbWFpbC5jb20iLCJQaG9uZV9OdW1iZXIiOiI0NTc4NCIsIlNvY2lhbF9JRCI6IiIsIlNvY2lhbF9Qcm92aWRlciI6IiJ9LCJpYXQiOjE3MTU1OTU3MjZ9.5Zi_LJlcviYkOsVfUkKztuM18jdc10eTpHVcUitR4Qg`, // Add the JWT token here
        },
      },
    },
  },
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 