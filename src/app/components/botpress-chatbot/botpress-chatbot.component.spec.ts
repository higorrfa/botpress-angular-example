import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotpressChatbotComponent } from './botpress-chatbot.component';

describe('BotpressChatbotComponent', () => {
  let component: BotpressChatbotComponent;
  let fixture: ComponentFixture<BotpressChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotpressChatbotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotpressChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
