function calculateInvestment() {
    const companyName = document.getElementById('companyName').value;
    const laborHours = parseFloat(document.getElementById('laborHours').value);
    const hourlyWage = parseFloat(document.getElementById('hourlyWage').value);
    const solutionType = parseInt(document.getElementById('solutionType').value);
  
    const solutions = [
      { cost: 30000, maintenance: 6000 },
      { cost: 80000, maintenance: 7000 },
      { cost: 75000, maintenance: 17000 }
    ];
  
    const { cost, maintenance } = solutions[solutionType - 1];
  
    const annualLaborCost = laborHours * hourlyWage * 52;
    const rateOfInvestment = (annualLaborCost - cost - maintenance).toFixed(2);
  
    document.getElementById('companyOutput').innerText = companyName;
    document.getElementById('laborCostOutput').innerText = `$${annualLaborCost.toFixed(2)}`;
    document.getElementById('investmentRateOutput').innerText = `$${rateOfInvestment}`;
  
    let detailsText;
    switch (solutionType) {
      case 1:
        detailsText = `Your Rate of investment: $${annualLaborCost} - ($${cost} + $${maintenance})`;
        break;
      case 2:
        detailsText = `Your Rate of investment: $${annualLaborCost} - ($${cost} + $${maintenance})`;
        break;
      case 3:
        detailsText = `Your Rate of investment: $${annualLaborCost} - ($${cost} + $${maintenance})`;
        break;
    }
  
    document.getElementById('calculationDetails').innerText = detailsText;
  }
  