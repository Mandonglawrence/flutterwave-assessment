"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isRuleValidJson(req, res, next) {
    var condition_values = ["neq", "gt", "gte", "eq", "contains"];
    if ((typeof req.body.rule === 'object') && (!Array.isArray(req.body.rule))) {
        var _a = req.body.rule, field = _a.field, condition = _a.condition, condition_value = _a.condition_value;
        if (!field) {
            res.status(400).send({
                "message": "field is required.",
                "status": "error",
                "data": null
            });
            return;
        }
        else if (!condition) {
            res.status(400).send({
                "message": "condition is required.",
                "status": "error",
                "data": null
            });
            return;
        }
        else if (!condition_value) {
            res.status(400).send({
                "message": "condition_value is required.",
                "status": "error",
                "data": null
            });
            return;
        }
        else if (!condition_values.includes(condition)) {
            res.status(400).send({
                "message": "condition value is invalid.",
                "status": "error",
                "data": null
            });
            return;
        }
        next();
    }
    else {
        res.status(400).send({
            "message": "rule should be an object.",
            "status": "error",
            "data": null
        });
        return;
    }
}
exports.default = isRuleValidJson;
