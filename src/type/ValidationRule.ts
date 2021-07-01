import validator from 'validator';

type ValidationRule =
    ['contains', string] |
    ['equals', string] |
    'isAlphanumeric' |
    'isAscii' |
    'isBase32' |
    'isBase64' |
    'isBefore' |
    'isIBAN' |
    'isBIC' |
    'isBoolean' |
    ['isByteLength', validator.IsByteLengthOptions] |
    'isCreditCard' |
    ['isCurrency', validator.IsCurrencyOptions] |
    'isEthereumAddress' |
    'isBtcAddress' |
    'isDataURI' |
    'isDate' |
    ['isDate', validator.IsDateOptions] |
    'isDecimal' |
    ['isDecimal', validator.IsDecimalOptions] |
    ['isDivisibleBy', number] |
    'isEmail' |
    ['isEmail', validator.IsEmailOptions] |
    'isEmpty' |
    ['isEmpty', validator.IsEmptyOptions] |
    'isFloat' |
    ['isFloat', validator.IsFloatOptions] |
    'isFQDN' |
    ['isFQDN', validator.IsFloatOptions] |
    'isFullWidth' |
    'isHalfWidth' |
    ['isHash', validator.HashAlgorithm] |
    'isHexadecimal' |
    'isHexColor' |
    'isHSL' |
    'isRgbColor' |
    ['isRgbColor', boolean] |
    'isIdentityCard' |
    ['isIdentityCard', validator.IdentityCardLocale] |
    ['isIn', any[]] |
    'isInt' |
    ['isInt', validator.IsIntOptions] |
    'isIP' |
    ['isIP', validator.IPVersion] |
    'isIPRange' |
    ['isIPRange', validator.IPVersion] |
    'isISBN' |
    ['isISBN', validator.IPVersion] |
    'isEAN' |
    'isISIN' |
    'isISO31661Alpha2' |
    'isISO31661Alpha3' |
    'isISO8601' |
    ['isISO8601', validator.IsISO8601Options] |
    'isISSN' |
    ['isISSN', validator.IsISSNOptions] |
    'isISRC' |
    'isRFC3339' |
    'isJSON' |
    'isJWT' |
    'isLatLong' |
    ['isLength', validator.IsLengthOptions] |
    'isLocale' |
    'isLowercase' |
    'isMACAddress' |
    ['isMACAddress', validator.IsMACAddressOptions] |
    'isMagnetURI' |
    'isMD5' |
    'isMimeType' |
    'isMobilePhone' |
    ['isMobilePhone', 'any' | validator.MobilePhoneLocale | validator.MobilePhoneLocale[]] |
    ['isMobilePhone', 'any' | validator.MobilePhoneLocale | validator.MobilePhoneLocale[], validator.IsMobilePhoneOptions] |
    'isMongoId' |
    'isMultibyte' |
    'isNumeric' |
    ['isNumeric', validator.IsNumericOptions] |
    'isOctal' |
    'isPassportNumber' |
    ['isPassportNumber', string] |
    'isPort' |
    ['isPostalCode', 'any' | validator.PostalCodeLocale] |
    'isSemVer' |
    'isStrongPassword' |
    ['isStrongPassword', validator.strongPasswordOptions] |
    'isSurrogatePair' |
    'isURL' |
    ['isURL', validator.IsURLOptions] |
    'isUppercase' |
    'isUUID' |
    ['isUUID', validator.UUIDVersion] |
    'isVariableWidth' |
    ['isWhitelisted', string | string[]] |
    ['matches', RegExp] |
    'isSlug'
;
export default ValidationRule;