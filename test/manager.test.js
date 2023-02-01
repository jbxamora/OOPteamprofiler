const Manager = require("../staff/Manager");

test("Can create Office Number, Get it and Check Role", () => {
    const testOfiiceNumber = 3;
    const expectedRole = "Manager";
    const employeeInstance = new Manager(
        "John Doe",
        2,
        "fakemail@fakedomain.not",
        testOfiiceNumber
    );

    // Verify Office Number
    expect(employeeInstance.officeNumber).toBe(testOfiiceNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfiiceNumber);

    // Verify Role
    expect(employeeInstance.getRole()).toBe(expectedRole);
});
