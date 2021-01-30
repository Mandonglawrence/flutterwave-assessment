"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateField(req, res, next) {
    var condition_values = ["neq", "gt", "gte", "eq", "contains"];
    var _a = req.body.rule, field = _a.field, condition = _a.condition, condition_value = _a.condition_value;
    var data = req.body.data;
    // if(typeof data === 'object' && !isArray(data)){
    switch (condition) {
        case 'gte':
            if (condition_value >= data[field]) {
                res.status(200).send({
                    "message": "field " + field + " successfully validated.",
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
                    "message": "field " + field + " successfully validated.",
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
        case "neq":
            if (condition_value !== data[field]) {
                res.status(200).send({
                    "message": "field " + field + " successfully validated.",
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
        case "gt":
            if (condition_value > data[field]) {
                res.status(200).send({
                    "message": "field " + field + " successfully validated.",
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
        case "contains":
            // if(Array.isArray(data)){
            if (data.includes(field)) {
                res.status(200).send({
                    "message": "field " + field + " successfully validated.",
                    "status": "success",
                    "data": {
                        "validation": {
                            "error": false,
                            "field": field,
                            "field_value": data[data.indexOf(field)],
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
    }
}
exports.default = validateField;
