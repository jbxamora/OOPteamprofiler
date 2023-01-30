const Engineer = require("../staff/Engineer.js");

test("Can create Engineer, Verify Github and Role", () => {
  const testGithub = "NoTaReAlGiThuB";
  const expectedRole = "Engineer";
  const employeeInstance = new Engineer(
    "John Doe",
    2,
    "fakemail@fakedomain.not",
    testGithub
  );

  // Verify Github Username
  expect(employeeInstance.github).toBe(testGithub);
  expect(employeeInstance.getGithub()).toBe(testGithub);

  // Verify Role
  expect(employeeInstance.getRole()).toBe(expectedRole);
});
