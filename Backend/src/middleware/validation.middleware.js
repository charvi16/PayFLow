function validate(validatorFn) {
  return (req, res, next) => {
    console.log("VALIDATING BODY:", req.body);

    const error = validatorFn(req.body);

    console.log("VALIDATION RESULT:", error);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    next();
  };
}

module.exports = validate;