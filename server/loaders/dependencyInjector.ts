import {Container} from "typedi";
import mailgun from "mailgun-js";
import config from "../config";

export default ({ models }: {models: { name: string; model: any }[] }) => {
  try {
    models.forEach(m => {
      Container.set(m.name, m.model);
    });

    Container.set('emailClient', mailgun({ apiKey: config.MAILGUN.API_KEY, domain: config.MAILGUN.DOMAIN }));

  } catch (e) {
    throw e;
  }
};