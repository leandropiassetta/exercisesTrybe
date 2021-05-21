const grossSalary = 3000;

let inss; // National Institute of Social Security.
function inssCalcule(grossSalary) {
    if(grossSalary <= 0){
        inss = 0;
    }
    else if(grossSalary <= 1556.94) {
        inss = grossSalary * 0.08; // 8% for INSS
    }
    else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
        inss = grossSalary * 0.09; // 9% for INSS
    }
    else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
        inss = grossSalary * 0.11; // 11% for INSS
    }    
    else {
        inss = 570.88; // maximum INSS
    }
    return inss;
}

const basicSalary = inssCalcule(grossSalary) > 0
    ? grossSalary - inssCalcule(grossSalary) : "Invalid salary, please retype it";

//Calculating IR(Income tax)

let ir; // Income Tax
function irCalcule(basicSalary) {
    if(basicSalary > 1903.98 && basicSalary <= 2826.65) {
        ir = (basicSalary * 0.075) - 142.80; // 7.5% for IR
    }
    
    else if(basicSalary >= 2826.66 && basicSalary <= 3751.05) {
        ir = (basicSalary * 0.15) - 354.80; // 15% for IR
    }
    else if(basicSalary >= 3751.06 && basicSalary <= 4664.68) {
        ir = (basicSalary * 0.225) - 636.13; // 22,5% for IR
    }
    else{
        ir = (basicSalary * 0.275) - 869.36; // 27,5 for maximum IR
    }
    return ir;
}

const salaryLiquid = () => {
    const salary = basicSalary - irCalcule(basicSalary);
    return console.log(`Your salary liquid is: ${salary.toFixed(2)}`)
}

salaryLiquid()

