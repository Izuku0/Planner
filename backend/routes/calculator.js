const express = require("express");
const router = express.Router();

router.post("/calculate", (req, res) => {
  const { currentAge, retirementAge, wishToLiveTill, inflation, capitalGainTax, incomeTax } =
    req.body;

  // Example calculation logic
  const yearsToRetirement = retirementAge - currentAge;
  const yearsAfterRetirement = wishToLiveTill - retirementAge;
  const totalYears = yearsToRetirement + yearsAfterRetirement;

  res.json({
    yearsToRetirement,
    yearsAfterRetirement,
    totalYears,
    inflation,
    capitalGainTax,
    incomeTax,
  });
});

module.exports = router;
