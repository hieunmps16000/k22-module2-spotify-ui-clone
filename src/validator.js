export function Validator(options) {
    const formElement = document.querySelector(options.form);
    if (!formElement) {
        console.error(`Validator: ${options.formElement} is not found`);
        return;
    }

    const selectorRules = {};
    function validate(inputElement, rule) {
        const errorElement = inputElement.closest(options.formGroupSelector).querySelector(options.messageSelector);

        const rules = selectorRules[rule.selector];
        let errorMessage;

        for (let i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.textContent = errorMessage;
            inputElement.parentElement.classList.add("invalid");
        } else {
            errorElement.textContent = "";
            inputElement.parentElement.classList.remove("invalid");
        }
        return !errorMessage;
    }

    options.rules.forEach((rule) => {
        const inputElement = formElement.querySelector(rule.selector);

        // Push test to selectorRules
        if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.test);
        } else {
            selectorRules[rule.selector] = [rule.test];
        }

        inputElement.addEventListener("blur", () => {
            validate(inputElement, rule);
        });

        inputElement.addEventListener("input", () => {
            const formGroupElement = inputElement.closest(options.formGroupSelector);
            const errorElement = formGroupElement.querySelector(options.messageSelector);
            errorElement.textContent = "";
            formGroupElement.classList.remove("invalid");
        });
    });

    // Handle submit form
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        let isFormValid = true;
        options.rules.forEach((rule) => {
            const inputElement = formElement.querySelector(rule.selector);
            const isValid = validate(inputElement, rule);
            if (!isValid) isFormValid = isValid;
        });

        if (isFormValid) {
            if (typeof options.onSubmit === "function") {
                const enableInputs = formElement.querySelectorAll("[name]");
                const formValues = Array.from(enableInputs).reduce((values, input) => {
                    values[input.name] = input.value;
                    return values;
                }, {});
                options.onSubmit(formValues);
            } else {
                formElement.submit();
            }
        }
    });
}

/**
 * DEFINE RULES
 */

Validator.isRequired = function (selector) {
    return {
        selector,
        test(value) {
            return value.trim() ? undefined : "Vui lòng nhập vào trường này";
        },
    };
};

Validator.isEmail = function (selector) {
    return {
        selector,
        test(value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Trường này phải là email";
        },
    };
};

Validator.minLength = function (selector, min) {
    return {
        selector,
        test(value) {
            return value.length >= min ? undefined : `Mật khẩu phải có ít nhất ${min} ký tự`;
        },
    };
};

Validator.hasUpperCaseChar = function (selector) {
    return {
        selector,
        test(value) {
            const hasUpperCaseChar = value.split("").some((char) => {
                return char.charCodeAt() >= "A".charCodeAt() && char.charCodeAt() <= "Z".charCodeAt();
            });
            return hasUpperCaseChar ? undefined : "Phải có ít nhất một ký tự viết hoa";
        },
    };
};

Validator.hasLowerCaseChar = function (selector) {
    return {
        selector,
        test(value) {
            const hasUpperCaseChar = value.split("").some((char) => {
                return char.charCodeAt() >= "a".charCodeAt() && char.charCodeAt() <= "z".charCodeAt();
            });
            return hasUpperCaseChar ? undefined : "Phải có ít nhất một ký tự viết thường";
        },
    };
};

Validator.hasNumber = function (selector) {
    return {
        selector,
        test(value) {
            const hasNumber = value.split("").some((char) => {
                return char.charCodeAt() >= "0".charCodeAt() && char.charCodeAt() <= "9".charCodeAt();
            });
            return hasNumber ? undefined : "Phải có ít nhất một ký tự là chữ số";
        },
    };
};
