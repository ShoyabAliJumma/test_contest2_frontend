// Given array
const employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
  ];
  
  // Print employees with profession "developer" using map
  function PrintDeveloperbyMap() {
    const developers = employees.map(employee => {
      if (employee.profession === "developer") {
        return employee;
      }
    });
    console.log(developers);
  }
  
  // Print employees with profession "developer" using forEach
  function PrintDeveloperbyForEach() {
    const developers = [];
    employees.forEach(employee => {
      if (employee.profession === "developer") {
        developers.push(employee);
      }
    });
    console.log(developers);
  }
  
  // Add new employee data to the array
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(newEmployee);
  }
  
  // Remove employees with profession "admin"
  function removeAdmin() {
    const updatedEmployees = employees.filter(employee => employee.profession !== "admin");
    console.log(updatedEmployees);
  }
  
  // Concatenate two arrays
  function ConcatinateArray() {
    const newArray = [
      { id: 5, name: "michael", age: "22", profession: "developer" },
      { id: 6, name: "lisa", age: "24", profession: "admin" },
      { id: 7, name: "peter", age: "23", profession: "developer" }
    ];
  
    const concatenatedArray = employees.concat(newArray);
    console.log(concatenatedArray);
  }
  
 // Function calls
  PrintDeveloperbyMap();
  PrintDeveloperbyForEach();
  addData();
  removeAdmin();
  ConcatinateArray();
  