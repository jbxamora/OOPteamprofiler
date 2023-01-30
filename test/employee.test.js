import Employee from "./staff/Employee.js";

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
    expect(typeof employeeInstance).toBe("object");
  });
  it("Has correct name", () => {
    expect(typeof employeeInstance.name).toBe(testName);
  });
  it("Has correct ID", () => {
    expect(typeof employeeInstance.id).toBe(testID);
  });
  it("Has correct Email", () => {
    expect(typeof employeeInstance.email).toBe(testEmail);
  });
  it("Gets name through getName method", () => {
    expect(typeof employeeInstance.getName()).toBe(testName);
  });
  it("Gets ID through getID method", () => {
    expect(typeof employeeInstance.getId()).toBe(testID);
  });
  it("Gets Email through getEmail method", () => {
    expect(typeof employeeInstance.getEmail()).toBe(testEmail);
  });
  it("Has correct role", () => {
    expect(typeof employeeInstance.getRole()).toBe(returnValue);
  });
});
