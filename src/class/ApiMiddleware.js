"use strict";
exports.__esModule = true;
var ApiMiddleware = /** @class */ (function () {
    function ApiMiddleware() {
    }
    ApiMiddleware.prototype.respondWithError = function (response, message, code) {
        if (code === void 0) { code = 400; }
        response.status(code).json({ message: message });
    };
    return ApiMiddleware;
}());
exports["default"] = ApiMiddleware;
