// Submit Logic
const submitHandler = (event) => {
  let name1 = document.getElementById("name").value;
  let doctor_id = document.getElementById("doctor_id").value;
  let specialization = document.getElementById("specialization").value;
  let experience = document.getElementById("experience").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let role = "";
  if (experience > 5) role = "Senior";
  else if (experience >= 2 && experience <= 5) role = "Juinor";
  else if (experience <= 1) role = "Trainee";

  const doctor = {
    name: name1,
    doctor_id: doctor_id,
    sp: specialization,
    exp: experience,
    email: email,
    mobile: mobile,
    role: role,
  };

  if (localStorage.getItem("doctors")) {
    let doctors = JSON.parse(localStorage.getItem("doctors"));
    doctors.push(doctor);
    localStorage.setItem("doctors", JSON.stringify(doctors));
  } else {
    const doctors = [];
    doctors.push(doctor);
    localStorage.setItem("doctors", JSON.stringify(doctors));
  }
};

// Display table logic
const displayTable = () => {
  if (localStorage.getItem("doctors")) {
    let tbody = document.querySelector("tbody");
    let doctors = JSON.parse(localStorage.getItem("doctors"));
    doctors.map((element, ind) => {
      tbody.innerHTML += `
                <tr>
                    <td align="center">${element.name}</td>
                    <td align="center">${element.doctor_id}</td>
                    <td align="center">${element.sp}</td>
                    <td align="center">${element.exp}</td>
                    <td align="center">${element.email}</td>
                    <td align="center">${element.mobile}</td>
                    <td align="center">${element.role}</td>
                    <td align="center" style="background-color: red;"><button onclick="deleteHandler(${ind})">delete</button></td>
                </tr>
            `;
    });

    return;
  }
  return;
};

// Filter logic
const selectHandler = () => {
  const filter = document.getElementById("filter").value;
  if (localStorage.getItem("doctors")) {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    let doctors = JSON.parse(localStorage.getItem("doctors"));
    tbody.innerHTML = `
                    <tr>
                        <th>Name</th>
                        <th>Doctor <br> ID</th>
                        <th>Specialization</th>
                        <th>Experience <br> in Years</th>
                        <th>Email Address</th>
                        <th>Mobile <br> Number</th>
                        <th>Role</th>
                        <th>Delete</th>
                    </tr>
      `;
    doctors.map((element, ind) => {
      if (element.sp == filter)
        tbody.innerHTML += `
                    <tr>
                        <td align="center">${element.name}</td>
                        <td align="center">${element.doctor_id}</td>
                        <td align="center">${element.sp}</td>
                        <td align="center">${element.exp}</td>
                        <td align="center">${element.email}</td>
                        <td align="center">${element.mobile}</td>
                        <td align="center">${element.role}</td>
                        <td align="center" style="background-color: red;"><button onclick="deleteHandler(${ind})">delete</button></td>
                    </tr>
                `;
    });

    return;
  }
  return;
};

// Delete button logic
const deleteHandler = (ind) => {
  let doctors = JSON.parse(localStorage.getItem("doctors"));
  doctors.splice(ind, 1);
  localStorage.setItem("doctors", JSON.stringify(doctors));
  window.location.reload();
}

displayTable();
