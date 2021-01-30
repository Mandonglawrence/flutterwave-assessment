"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var checkRequiredField_1 = __importDefault(require("./middlewares/checkRequiredField"));
var isRuleValidJsonObject_1 = __importDefault(require("./middlewares/isRuleValidJsonObject"));
var checkRuleAndDataPropertyTypes_1 = __importDefault(require("./middlewares/checkRuleAndDataPropertyTypes"));
var connection_1 = __importDefault(require("./bin/www/connection"));
connection_1.default();
exports.app = express_1.default();
exports.app.use(morgan_1.default("dev"));
exports.app.use(express_1.default.json());
exports.app.disable("x-powered-by");
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.get("/", function (_req, res) {
    res.send({
        "message": "My Rule-Validation API",
        "status": "success",
        "data": {
            "name": "Lawrence Mandong",
            "github": "@mandonglawrence",
            "email": "mandonglawrence@gmail.com",
            "mobile": "08064344075",
            "twitter": "@lawrencemandon"
        }
    });
    return;
});
exports.app.post("/validate-rule", checkRequiredField_1.default, isRuleValidJsonObject_1.default, checkRuleAndDataPropertyTypes_1.default.checkRuleAndDataPropertyTypes, checkRuleAndDataPropertyTypes_1.default.isDataTypeValid, checkRuleAndDataPropertyTypes_1.default.isFieldInData, function (req, res) {
    res.status(200).send({
        "message": "field missions failed validation.",
        "status": "error",
        "data": {
            "validation": {
                "error": true,
                "field": "missions",
                "field_value": 30,
                "condition": "gte",
                "condition_value": 54
            }
        }
    });
    return;
});
exports.default = exports.app;
