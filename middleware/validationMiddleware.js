import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";

const withValidationErrors = (validationValues) => {
  return [
    validationValues,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => {
          return error.msg;
        });

        throw new BadRequestError(errorMessages);
      }

      next();
    },
  ];
};

export const validateContactInfo = withValidationErrors([
  body("email")
    .isEmail()
    .withMessage("invalid email format")
    .notEmpty()
    .withMessage("email is required"),
  body("theme").notEmpty().withMessage("subject is required"),
  body("info").notEmpty().withMessage("info is required"),
  body("company").notEmpty().withMessage("company is required"),
]);
