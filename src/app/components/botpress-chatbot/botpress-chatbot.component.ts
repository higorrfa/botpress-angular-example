import { Component, OnInit } from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-botpress-chatbot',
  templateUrl: './botpress-chatbot.component.html',
  styleUrls: ['./botpress-chatbot.component.css']
})
export class BotpressChatbotComponent implements OnInit {

  constructor() {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    document.body.appendChild(script);

    window.botpressWebChat.init({
      "botId": "eedfccf7-4c05-4534-be36-69eee7243fa0",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "eedfccf7-4c05-4534-be36-69eee7243fa0",
      "useSessionStorage": true,
      "showBotInfoPage": true,
      "enableConversationDeletion": true,
      "showPoweredBy": true
    });
   }

  ngOnInit(): void {
  }

}
