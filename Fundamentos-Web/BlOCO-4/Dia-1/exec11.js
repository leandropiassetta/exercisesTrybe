/*
A person who works in Brazil with a signed portfolio has the INSS and IR deducted from his gross salary. Make a program that, given a gross salary, calculates the net to be received.
The notation for a salary of R$1500.10, for example, should be 1500.10. For tax bands, use the following references:
INSS
Gross wage up to R$ 1.556,94: 8% aliquot
Gross wage from $ 1,556.95 to $ 2,594.92: 9% rate
Gross wage of $ 2,594.93 to $ 5,189.82: 11% tax rate
Gross wage above R$ 5.189,82: maximum aliquot of R$ 570,88
IR
Up to R$ 1,903.98: income tax-exempt
From R$ 1,903.99 to 2,826.65: 7.5% tax rate and R$ 142.80 installment to be deducted from tax
From R$ 2.826,66 to R$ 3.751,05: 15% tax rate and R$ 354,80 portion to be deducted from the tax
From R$ 3,751.06 to R$ 4,664.68: 22.5% tax rate and R$ 636.13 portion to be deducted from the tax
Above $ 4,664.68: 27.5% tax rate and $ 869.36 to be deducted from the tax.
Example: A person has a gross wage of $ 3,000.00. The calculation will be:
The gross wage is between $ 2,594.93 and $ 5,189.82, so its rate for INSS is 11%. The INSS will be 11% of $ 3.000, or $ 330.00.
To find out the base salary, subtract from the gross salary the INSS tax rate: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
To get the income tax value, we have a salary (already deducted the INSS) between R$ 1,903.99 and 2,826.65, being the tax rate, then, of 7.5%, with part of R$ 142.80 to be deducted from the tax. Thus, we have:
R$ 2,670.00: salary with INSS already deducted;
7.5%: income tax rate;
R$ 142.00: portion to be deducted from the tax.
Making the account, we have: (7.5% of R$ 2,670.00) - R$ 142.80 = R$ 57.45
The last calculation to get the net wage is $ 2,670.00 - $ 57.45 (base salary - IR value) = $ 2,612.55.
Result: R$ 2.612,55.
Tip: how about identifying the rates with explanatory name variables?
*/

let grossSalary = 3000;
let inss;// National Institute of Social Security.
let ir;// Income Tax
let basicSalary, salaryLiquid;


if(grossSalary <= 0){
    console.log ("Invalid salary, please retype it")
}
else if(grossSalary <= 1556.94){
    inss = grossSalary * 0.08; // 8% for INSS
}
else if (grossSalary >= 1556.95 && grossSalary <= 2594.92){
    inss = grossSalary * 0.09; // 9% for INSS
}
else if (grossSalary >= 2594.93 && grossSalary <= 5189.82){
    inss = grossSalary * 0.11; // 11% for INSS
}    
else{
    inss = 570.88; // maximum INSS
}

basicSalary = grossSalary - inss;

//----------------------------------------------------------

//Calculating IR(Income tax)

if(basicSalary > 1903.98 && basicSalary <= 2826.65){
    ir = basicSalary * 0.075 - 142.80; // 7.5% for IR
}

else if(basicSalary >= 2826.66 && basicSalary <= 3751.05){
    ir = basicSalary * 0.15 - 354.80; // 15% for IR
}
else if(basicSalary >= 3751.06 && basicSalary <= 4664.68){
    ir = basicSalary * 0.225 - 636.13; // 22,5% for IR
}
else{
    ir = basicSalary * 0.275 - 869.36; // 27,5 for maximum IR
}

salaryLiquid = basicSalary - ir;

console.log(salaryLiquid)
