import {Request, Response, NextFunction} from "express";
 const checkRequiredFields = (req:Request, res:Response, next:NextFunction)=>{
  if(typeof (req.body) === 'object' && !Array.isArray(req.body)){
    const {rule, data} = req.body;
    if(!rule){
        res.status(400).json({
          "message": "rule is required.",
        "status": "error",
        "data": null});
        return;
      }
      else if(!data){
        res.status(400).json({
          "message": "data is required.",
        "status": "error",
        "data": null});
        return; 
      }
      next();
  }
  else{
    res.status(400).send({
    "message": "Invalid JSON payload passed.",
    "status": "error",
    "data": null
    });
    return;
}
}
export default checkRequiredFields;