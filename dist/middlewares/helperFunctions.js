"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
function processCondition(req, res, next) {
    var _a = req.body.rule, field = _a.field, condition = _a.condition, condition_value = _a.condition_value;
    var data = req.body.data;
    var condition_values = ["neq", "gt", "gte", "eq", "contains"];
    if (typeof data === 'object' && !lodash_1.isArray(data)) {
        switch (condition) {
            case 'gte':
                if (condition_value >= data[field]) {
                    res.status(200).send({
                        "message": "field " + field + " passed validation.",
                        "status": "success",
                        "data": {
                            "validation": {
                                "error": false,
                                "field": field,
                                "field_value": data[field],
                                "condition": condition,
                                "condition_value": condition_value
                            }
                        }
                    });
                    return;
                }
                else {
                    res.status(400).send({
                        "message": "field " + field + " failed validation.",
                        "status": "error",
                        "data": {
                            "validation": {
                                "error": true,
                                "field": field,
                                "field_value": data[field],
                                "condition": condition,
                                "condition_value": condition_value
                            }
                        }
                    });
                }
                break;
            case "eq":
                if (condition_value === data[field]) {
                    res.status(200).send({
                        "message": "field " + field + " passed validation.",
                        "status": "success",
                        "data": {
                            "validation": {
                                "error": false,
                                "field": field,
                                "field_value": data[field],
                                "condition": condition,
                                "condition_value": condition_value
                            }
                        }
                    });
                    return;
                }
                else {
                    res.status(400).send({
                        "message": "field " + field + " failed validation.",
                        "status": "error",
                        "data": {
                            "validation": {
                                "error": true,
                                "field": field,
                                "field_value": data[field],
                                "condition": condition,
                                "condition_value": condition_value
                            }
                        }
                    });
                }
                break;
        }
    }
}
exports.default = processCondition;
