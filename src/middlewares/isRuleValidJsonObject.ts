import {Request, Response, NextFunction} from "express";
function isRuleValidJson(req:Request,res:Response, next:NextFunction) {
    const condition_values = ["neq", "gt", "gte","eq","contains"]
    if((typeof req.body.rule === 'object') && (!Array.isArray(req.body.rule))) {
        const {field, condition, condition_value} = req.body.rule;
        if(!field){
            res.status(400).send({
                "message":"field is required.",
                "status":"error",
                "data":null
            })  
            return;
        } 
        else if(!condition){
            res.status(400).send({
                "message":"condition is required.",
                "status":"error",
                "data":null
            })
            return;
            }
            else if(!condition_value){
                res.status(400).send({
                    "message":"condition_value is required.",
                    "status":"error",
                    "data":null
                })
                return;
                }
                else if(!condition_values.includes(condition)){
                    res.status(400).send({
                        "message":"condition value is invalid.",
                        "status":"error",
                        "data":null
                    })
                    return;
                }
     next();
    }else{

        res.status(400).send({
           "message":"rule should be an object.",
           "status":"error",
           "data": null
       });
       return;
    }
  }
  
  export default isRuleValidJson;