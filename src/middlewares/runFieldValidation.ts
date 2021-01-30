import {Request, Response, NextFunction} from "express";
import { isArray } from "lodash";
function validateField(req:Request,res:Response, next:NextFunction) {
    const condition_values = ["neq", "gt", "gte","eq","contains"]
    const {field, condition, condition_value} = req.body.rule;
    const {data} = req.body;
    if(typeof data === 'object' && !isArray(data)){
        switch(condition){
            case'gte':
                if(condition_value >= data[field]){
                    res.status(200).send({
                        "message": `field ${field} passed validation.`,
                        "status": "success",
                        "data": {
                          "validation": {
                            "error": false,
                            "field": field,
                            "field_value": data[field],
                            "condition": condition,
                            "condition_value": condition_value
                          }
                          }})
                          return
                }else{res.status(400).send({
                    "message": `field ${field} failed validation.`,
                    "status": "error",
                    "data": {
                      "validation": {
                        "error": true,
                        "field": field,
                        "field_value": data[field],
                        "condition": condition,
                        "condition_value": condition_value
                      }
                      }});
                    }
                      break;
            case "eq":
                if(condition_value === data[field]){
                    res.status(200).send({
                        "message": `field ${field} passed validation.`,
                        "status": "success",
                        "data": {
                          "validation": {
                            "error": false,
                            "field": field,
                            "field_value": data[field],
                            "condition": condition,
                            "condition_value": condition_value
                          }
                          }})
                          return
                }else{res.status(400).send({
                    "message": `field ${field} failed validation.`,
                    "status": "error",
                    "data": {
                      "validation": {
                        "error": true,
                        "field": field,
                        "field_value": data[field],
                        "condition": condition,
                        "condition_value": condition_value
                      }
                      }});
                    }
                      break;

        }
    }
   
  }
  
  export default validateField;