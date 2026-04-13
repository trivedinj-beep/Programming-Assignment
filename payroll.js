//payroll 

const prompt = require("prompt-sync")({ sigint: true });

let employees = [];
let numEmployees = 3;


for (let i = 0; i < numEmployees; i++) {
    console.log(`\nEnter details for Employee ${i + 1}`);

    let name = prompt("Name: ");

    let wage;
    while (true) {
        wage = parseFloat(prompt("Hourly Wage: "));
        if (wage > 0) break;
        console.log("Invalid input. Wage must be positive.");
    }

    let hours;
    while (true) {
        hours = parseFloat(prompt("Hours Worked: "));
        if (hours >= 0 && hours <= 80) break;
        console.log("Invalid input. Hours must be between 0 and 80.");
    }

    let regularHours = Math.min(hours, 40);
    let overtimeHours = Math.max(hours - 40, 0);

    let regularPay = regularHours * wage;
    let overtimePay = overtimeHours * wage * 1.5;
    let totalPay = regularPay + overtimePay;

    employees.push({
        name,
        hours,
        regularPay,
        overtimePay,
        totalPay
    });
}

let highestPaid = employees.reduce((max, emp) =>
    emp.totalPay > max.totalPay ? emp : max
);

console.log("\n===== Payroll Report =====");

employees.forEach(emp => {
    console.log(`\nName: ${emp.name}`);
    console.log(`Hours Worked: ${emp.hours}`);
    console.log(`Regular Pay: $${emp.regularPay.toFixed(2)}`);
    console.log(`Overtime Pay: $${emp.overtimePay.toFixed(2)}`);
    console.log(`Total Pay: $${emp.totalPay.toFixed(2)}`);

    if (emp === highestPaid) {
        console.log("*** HIGHEST PAID EMPLOYEE ***");
    }
});
