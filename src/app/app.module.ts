import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotpressChatbotComponent } from './components/botpress-chatbot/botpress-chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    BotpressChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
