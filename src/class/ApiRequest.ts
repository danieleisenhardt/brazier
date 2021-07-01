import Request from '../routing/interface/Request';
import Response from '../routing/interface/Response';
import ValidationRule from '../type/ValidationRule';
import ApiMiddleware from './ApiMiddleware';
import validator from 'validator';

export default abstract class ApiRequest extends ApiMiddleware {

    protected rules: {[key: string]: ValidationRule[]} = {};

    public validate(request: Request, response: Response) {
        for (const key in this.rules) {
            const rules = this.rules[key];

            for (const i in rules) {
                if (!rules.hasOwnProperty(i)) {
                    continue;
                }

                if (typeof request.body[key] !== 'string') {
                    request.body[key] = '';
                }

                if (typeof rules[i] === 'string') {
                    switch (rules[i]) {
                        case 'isAlphanumeric':
                            if (!validator.isAlphanumeric(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isAscii':
                            if (!validator.isAscii(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isBase32':
                            if (!validator.isBase32(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isBase64':
                            if (!validator.isBase64(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isBefore':
                            if (!validator.isBefore(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isIBAN':
                            if (!validator.isIBAN(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isBIC':
                            if (!validator.isBIC(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isBoolean':
                            if (!validator.isBoolean(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isCreditCard':
                            if (!validator.isCreditCard(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isEthereumAddress':
                            if (!validator.isEthereumAddress(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isBtcAddress':
                            if (!validator.isBtcAddress(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isDataURI':
                            if (!validator.isDataURI(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isDate':
                            if (!validator.isDate(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isEmail':
                            if (!validator.isEmail(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isEmpty':
                            if (!validator.isEmpty(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isFloat':
                            if (!validator.isFloat(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isFQDN':
                            if (!validator.isFQDN(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isFullWidth':
                            if (!validator.isFullWidth(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isHalfWidth':
                            if (!validator.isHalfWidth(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isHexadecimal':
                            if (!validator.isHexadecimal(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isHexColor':
                            if (!validator.isHexColor(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isHSL':
                            if (!validator.isHSL(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isRgbColor':
                            if (!validator.isRgbColor(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isIdentityCard':
                            if (!validator.isIdentityCard(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isInt':
                            if (!validator.isInt(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isIP':
                            if (!validator.isIP(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isIPRange':
                            if (!validator.isIPRange(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isISBN':
                            if (!validator.isISBN(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isEAN':
                            if (!validator.isEAN(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isISIN':
                            if (!validator.isISIN(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isISO31661Alpha2':
                            if (!validator.isISO31661Alpha2(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isISO31661Alpha3':
                            if (!validator.isISO31661Alpha3(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isISO8601':
                            if (!validator.isISO8601(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isISSN':
                            if (!validator.isISSN(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isISRC':
                            if (!validator.isISRC(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isRFC3339':
                            if (!validator.isRFC3339(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isJSON':
                            if (!validator.isJSON(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isJWT':
                            if (!validator.isJWT(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isLatLong':
                            if (!validator.isLatLong(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isLocale':
                            if (!validator.isLocale(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isLowercase':
                            if (!validator.isLowercase(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isMACAddress':
                            if (!validator.isMACAddress(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isMagnetURI':
                            if (!validator.isMagnetURI(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isMD5':
                            if (!validator.isMD5(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isMimeType':
                            if (!validator.isMimeType(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isMobilePhone':
                            if (!validator.isMobilePhone(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isMongoId':
                            if (!validator.isMongoId(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isMultibyte':
                            if (!validator.isMultibyte(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isNumeric':
                            if (!validator.isNumeric(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isOctal':
                            if (!validator.isOctal(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isPassportNumber':
                            if (!validator.isPassportNumber(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isPort':
                            if (!validator.isPort(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isSemVer':
                            if (!validator.isSemVer(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isStrongPassword':
                            if (!validator.isStrongPassword(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isSurrogatePair':
                            if (!validator.isSurrogatePair(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isURL':
                            if (!validator.isURL(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isUppercase':
                            if (!validator.isUppercase(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isUUID':
                            if (!validator.isUUID(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isVariableWidth':
                            if (!validator.isVariableWidth(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isSlug':
                            if (!validator.isSlug(request.body[key])) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i]}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;
                    }
                } else {
                    const param2: any = rules[i][1];
                    const param3: any = rules[i][2];

                    switch (rules[i][0]) {
                        case 'contains':
                            if (!validator.contains(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'equals':
                            if (!validator.equals(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isAfter':
                            if (!validator.isAfter(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isByteLength':
                            if (!validator.isByteLength(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isCurrency':
                            if (!validator.isCurrency(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isDate':
                            if (!validator.isDate(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isDecimal':
                            if (!validator.isDecimal(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isDivisibleBy':
                            if (!validator.isDivisibleBy(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isEmail':
                            if (!validator.isEmail(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isEmpty':
                            if (!validator.isEmpty(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isFloat':
                            if (!validator.isFloat(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isFQDN':
                            if (!validator.isFQDN(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isHash':
                            if (!validator.isHash(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isRgbColor':
                            if (!validator.isRgbColor(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isIdentityCard':
                            if (!validator.isIdentityCard(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isIn':
                            if (!validator.isIn(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isInt':
                            if (!validator.isInt(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isIP':
                            if (!validator.isIP(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isIPRange':
                            if (!validator.isIPRange(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isISBN':
                            if (!validator.isISBN(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isISO8601':
                            if (!validator.isISO8601(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isISSN':
                            if (!validator.isISSN(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isLength':
                            if (!validator.isLength(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isMACAddress':
                            if (!validator.isMACAddress(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isMobilePhone':
                            if (param3 === undefined) {
                                if (!validator.isMobilePhone(request.body[key], param2)) {
                                    return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                                }
                            } else {
                                if (!validator.isMobilePhone(request.body[key], param2, param3)) {
                                    return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)} ${JSON.stringify(param3)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                                }
                            }
                            break;

                        case 'isNumeric':
                            if (!validator.isNumeric(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isPassportNumber':
                            if (!validator.isPassportNumber(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isPostalCode':
                            if (!validator.isPostalCode(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isStrongPassword':
                            if (!validator.isStrongPassword(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isURL':
                            if (!validator.isURL(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isUUID':
                            if (!validator.isUUID(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'isWhitelisted':
                            if (!validator.isWhitelisted(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;

                        case 'matches':
                            if (!validator.matches(request.body[key], param2)) {
                                return this.respondWithError(response, `The value for '${key}' does not comply with the '${rules[i][0]} ${JSON.stringify(param2)}' rule. For more info see https://github.com/validatorjs/validator.js/blob/master/README.md`)
                            }
                            break;
                    }
                }
            }
        }

        return true;
    }

    /**
     * Placeholder for requests without a handle function
     *
     * @param request
     * @param response
     * @param next
     */
    async handle(request: Request, response: Response, next: () => void): Promise<void> {
        next();
    }
}
