const Employee = require("../staff/Employee");

const testName = "John Doe";
const testID = 2;
const testEmail = "fakemail@fakedomain.not";
const returnValue = "Employee";

describe("Employee", () => {
  let employeeInstance;
  beforeEach(() => {
    employeeInstance = new Employee(testName, testID, testEmail);
  });

  it("Can create a new employee", () => {
    expect(typeof employeeInstance).toEqual("object");
  });
  it("Has correct name", () => {
    expect(employeeInstance.name).toEqual(testName);
  });
  it("Has correct ID", () => {
    expect(employeeInstance.id).toEqual(testID);
  });
  it("Has correct Email", () => {
    expect(employeeInstance.email).toEqual(testEmail);
  });
  it("Gets name through getName method", () => {
    expect(employeeInstance.getName()).toEqual(testName);
  });
  it("Gets ID through getID method", () => {
    expect(employeeInstance.getId()).toEqual(testID);
  });
  it("Gets Email through getEmail method", () => {
    expect(employeeInstance.getEmail()).toEqual(testEmail);
  });
  it("Has correct role", () => {
    expect(employeeInstance.getRole()).toEqual(returnValue);
  });
});
