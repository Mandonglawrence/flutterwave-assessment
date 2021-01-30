"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkRequiredFields = function (req, res, next) {
    if (typeof (req.body) === 'object' && !Array.isArray(req.body)) {
        var _a = req.body, rule = _a.rule, data = _a.data;
        if (!rule) {
            res.status(400).json({
                "message": "rule is required.",
                "status": "error",
                "data": null
            });
            return;
        }
        else if (!data) {
            res.status(400).json({
                "message": "data is required.",
                "status": "error",
                "data": null
            });
            return;
        }
        next();
    }
    else {
        res.status(400).send({
            "message": "Invalid JSON payload passed.",
            "status": "error",
            "data": null
        });
        return;
    }
};
exports.default = checkRequiredFields;
