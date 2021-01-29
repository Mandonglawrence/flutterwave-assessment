import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import checkRequiredFields from "./middlewares/checkRequiredField";
import isRuleValidJson from "./middlewares/isRuleValidJsonObject";
import checks from "./middlewares/checkRuleAndDataPropertyTypes";

import myConnection  from "./bin/www/connection";

myConnection();
export const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
app.get("/",(_req:express.Request, res: express.Response)=>{
  res.send({
    "message": "My Rule-Validation API",
  "status": "success",
  "data": {
    "name": "Lawrence Mandong",
    "github": "@mandonglawrence",
    "email": "mandonglawrence@gmail.com",
    "mobile": "08064344075",
    "twitter": "@lawrencemandon"
  }});
  return;
})

app.post("/validate-rule", 
checkRequiredFields,
isRuleValidJson, 
checks.checkRuleAndDataPropertyTypes, 
checks.isFieldInData, 
(req:express.Request,res:express.Response)=>{
  res.send(req.body);
  return;
})

export default app;
