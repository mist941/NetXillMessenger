import expressLoader from "./express";
import mongoLoader from "./mongo";
import {Application} from "express";
import dependencyInjectorLoader from "./dependencyInjector";
import User from "../models/User";

export default async (express:Application) => {
  await mongoLoader();

  await dependencyInjectorLoader({
    models: [
      {
        name: 'userModel',
        model: User,
      },
    ],
  });

  await expressLoader(express);
}
