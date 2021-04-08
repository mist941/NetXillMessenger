import {Router} from "express";
import main from "./routes/main.mjs";

export default ()=>{
  const app = Router();
  main(app);
}