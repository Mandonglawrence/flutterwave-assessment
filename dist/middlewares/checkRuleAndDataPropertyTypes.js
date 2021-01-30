"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkRuleAndDataPropertyTypes(req, res, next) {
    var _a = req.body.rule, field = _a.field, condition = _a.condition, condition_value = _a.condition_value;
    if (typeof field !== "string") {
        res.status(400).send({
            "message": "field should be a string.",
            "status": "error",
            "data": null
        });
        return;
    }
    else if (typeof condition !== "string") {
        res.status(400).send({
            "message": "condition should be a string.",
            "status": "error",
            "data": null
        });
        return;
    }
    next();
}
var isFieldInData = function (req, res, next) {
    var field = req.body.rule.field;
    var ruleField = req.body.data[field];
    if (!ruleField) {
        res.status(400).send({
            "message": "field " + field + " is missing from data.",
            "status": "error",
            "data": null
        });
        return;
    }
    next();
};
var isDataTypeValid = function (req, res, next) {
    var data = req.body.data;
    var validType = ["object", "array", "string"];
    if (!validType.includes(typeof data)) {
        res.status(400).send({
            "message": "data should be an object, array or a string.",
            "status": "error",
            "data": null
        });
        return;
    }
    next();
};
exports.default = { checkRuleAndDataPropertyTypes: checkRuleAndDataPropertyTypes, isFieldInData: isFieldInData, isDataTypeValid: isDataTypeValid };
