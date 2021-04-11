import expressLoader from "./express";
import mongoLoader from "./mongo";
import {Application} from "express";

export default async (express:Application) => {
  await mongoLoader();
  await expressLoader(express);
}