
/*const employee = {
    name: "Sam",
    streetAddress: "123 Real Ave",
}

function updateEmployeeWithKeyAndValue() {
   return {
    ...employee,
    streetAddress: "11 Broadway"
   }
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam",
    employee.streetAddress = "12 Broadway";

    return employee;
}

function deleteFromEmployeeByKey() {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;

    return employee;
}*/

const employee = {
    name:"",
    streetAddress:"",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        streetAddress: "11 Broadway"
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
       employee.name = "Sam",
       employee.streetAddress = "12 Broadway";
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
        delete newEmployee.name;
        return {
            newEmployee}
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee
}

