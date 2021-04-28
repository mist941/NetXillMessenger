import {Inject, Service} from "typedi";
import {Mailgun} from "mailgun-js";

@Service()
export default class MailerService {
  constructor(
    @Inject('emailClient') private emailClient: Mailgun
  ) {
  }

  public async SendWelcomeEmail(email:string) {
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'NetXill Messenger',
        text: 'Welcome to my App!'
      };

    await this.emailClient.messages().send(data);
    return { delivered: 1, status: 'ok' };
  }
}