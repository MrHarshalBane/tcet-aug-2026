emps = [
    {name: "ajay", salary: 30000},
    {name: "shailesh", salary: 40000},
    {name: "sachin", salary: 20000}
]

console.log(emps);
//Total salary
total_salary = 0;
for(i = 0; i < emps.length; i++)
    total_salary = total_salary + emps[i].salary;
console.log(`Total Salary: ` + total_salary);
