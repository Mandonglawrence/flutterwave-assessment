import {Request, Response, NextFunction} from "express";
function checkRuleAndDataPropertyTypes(req:Request,res:Response, next:NextFunction) {
    const {field, condition, condition_value} = req.body.rule;
    if(typeof field !== "string"){
        res.status(400).send({
            "message": "field should be a string.",
            "status": "error",
            "data": null
          })
          return;
    }
   else if(typeof condition !== "string"){
    res.status(400).send({
        "message": "condition should be a string.",
        "status": "error",
        "data": null
      })
    return;
    }
   next();
  }
  
  const isFieldInData = (req:Request,res:Response, next:NextFunction)=>{

      const { field } = req.body.rule;
      const ruleField = req.body.data[field];
      if(!ruleField){
          res.status(400).send({
            "message": `field ${field} is missing from data.`,
            "status": "error",
            "data": null
          })
      }
      next();

  }
  export default {checkRuleAndDataPropertyTypes, isFieldInData};