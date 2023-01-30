const generateTeamHTML = (name, role, details) => {
  const icons = {
    Manager: "mug-hot",
    Engineer: "glasses",
    Intern: "user-graduate",
  };
  return `
    <div class="card employee-card">
     <div class="card-header bg-primary text-white">
      <h2 class="card-title">${name}</h2>
      <h3 class="card-title">
       <i class="fas fa-${icons[role]} mr-2"></i>
       ${role}
       <h3>
    </div>
    <div class="card-body">
     <ul class="list-group">
      ${details
        .map(
          (item) =>
            `<li class="list-group-item">${item.title}: ${item.value}</li>`
        )
        .join("")}
      </ul>
      </div>
      </div>
    `;
};

const generateTeam = (team) => {
  const employeeData = {
    Manager: ["ID", "Email", "Office Number"],
    Engineer: ["ID", "Email", "GitHub"],
    Intern: ["ID", "Email", "School"],
  };
  const html = team.map((employee) => {
    const { name, role, id, officeNumber, github, school } = employee;
    const employeeDetails = employeeData[role].map((title) => {
      switch (title) {
        case "ID":
          return { title, value: id };
        case "Email":
          return { title, value: `<a href="mailto:${email}">${email}</a>` };
        case "Office Number":
          return { title, value: officeNumber };
        case "GitHub":
          return {
            title,
            value: `<a href"https://github.com/${github}" target="_blank" rel=noopener noreferrer">${github}</a>`,
          };
        case "School":
          return { title, value: school };
        default:
          return {};
      }
    });
    return generateTeamHTML(name, role, employeeDetails);
  });

  return html.join("");
};

export default generateTeam;
