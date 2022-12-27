"use strict";

class Options {
    constructor(containNumbers = true, minLength = 8) {
        this.containNumbers = containNumbers;
        this.minLength = minLength;
    }
}

class PasswordValidator {
    constructor(newOptions) {
        const options = new Options();
        if (newOptions.hasOwnProperty("containNumbers")) {
            this.containNumbers = newOptions.containNumbers;
        } else {
            this.containNumbers = options.containNumbers;
        }
        if (newOptions.hasOwnProperty("minLength")) {
            this.minLength = newOptions.minLength;
        } else {
            this.minLength = options.minLength;
        }
    }
    validate(password) {
        if (this.isMinLength(password)) {
            if (this.isContainNumbers(password)) {
                return {};
            } else {
                return { containNumbers: "add numbers" };
            }
        } else {
            return { minLength: "too small" };
        }
    }
    isContainNumbers(password) {
        if (this.containNumbers) {
            let temp = /[0-9]/g;
            if (password.match(temp) != null) return true;
            return false;
        } else {
            return true;
        }
    }
    isMinLength(password) {
        if (this.minLength <= password.length) {
            return true;
        } else {
            return false;
        }
    }
}

const validator = new PasswordValidator({containNumbers : false});

console.log(validator.validate("asdasdasdasd"));
