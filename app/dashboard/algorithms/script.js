function calculateInvestment() {
    for(let i = 0; i < 10; i++){
        console.log('a');}
    seedTests(client);

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



async function seedTests(client) {
    try {
        const information = [
      {
           companyName: document.getElementById('companyName').value,
           laborHours:  parseFloat(document.getElementById('laborHours').value),
           hourlyWage: parseFloat(document.getElementById('hourlyWage').value),
           solutionType: parseInt(document.getElementById('solutionType').value),
       },
       ]; 
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        // Create the "Tests" table if it doesn't exist
        const createTable = await client.query(`
      CREATE TABLE IF NOT EXISTS Dropdown (
        companyName TEXT PRIMARY KEY,
        laborHours FLOAT NOT NULL,
        hourlyWage FLOAT NOT NULL,
        solutionType INT NOT NULL
      );
    `);

        console.log(`Created "information table" table`);

        // Insert data into the "Tests" table
        const insertedTests = await Promise.all(
            information.map(temp => {
                return client.query(`
          INSERT INTO Dropdown (companyName, laborHours, hourlyWage, solutionType)
          VALUES ($1, $2, $3, $4)
          ON CONFLICT (companyName) REPLACE;
        `, [temp.companyName, temp.laborHours, temp.hourlyWage, temp.solutionType]);
            })
        );

        console.log(`Seeded ${insertedTests.length} tests`);

        for(let i = 0; i < 100; i++){
        console.log('s');}
        return {
            createTable,
            information: insertedTests,
        };
    } catch (error) {
        console.error('Error seeding Test:', error);
        throw error;
    }
}

  