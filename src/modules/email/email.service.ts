
import * as gmailSdk from 'gmail-sdk'
import * as yahooSdk from 'yahoo-sdk'
import { IEmailService } from "./email.interface";

export class GoogleEmailProvider implements IEmailService {
  sentEmail(data: any) {
    gmailSdk.sent(data)
  }
}

export class YahooEmailProvider implements IEmailService {
  sentEmail(data: any) {
    yahooSdk.sent(data)
  }
}

export class EmailService implements IEmailService {
  private emailProvider: IEmailService;

  constructor(emailProvider: IEmailService) {
    this.emailProvider = emailProvider
  }

  sentEmail(data: any) {
    this.emailProvider.sentEmail(data)
  }
}