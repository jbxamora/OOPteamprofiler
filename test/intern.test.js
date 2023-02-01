const Intern = require("../staff/Intern")

test("Can create Intern, Verify School and Role", () => {
    const testSchool = "UC STAYATHOME";
    const expectedRole = "Intern";
    const employeeInstance = new Intern(
        "John Doe",
        2,
        "fakemail@fakedomain.not",
        testSchool
    );

    // Verify School Name
    expect(employeeInstance.school).toBe(testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);

    // Verify Role
    expect(employeeInstance.getRole()).toBe(expectedRole);
});
