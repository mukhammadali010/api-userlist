const getUsers = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")

        return res.data

    } catch (error) {
        return []
    }
}

const getUser = async (id) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        return res.data

    } catch (error) {
        return []
    }
}

const tbody = document.querySelector("tbody");
const setUsers = async () => {
    const users = await getUsers();
    console.log(users);
    tbody.innerHTML = ""
    users.map((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML =
            `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <a href = "https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}" target = "_blank">
                    ${user.address.city}
                    ${user.address.suite}
                    ${user.address.street}
                </a>
            </td>
            <td>${user.phone}</td>
            <td><a href = "https://www.${user.website}">${user.website}</a></td>
            <td>
                ${user.company.name}
                ${user.company.catchPhrase}
                ${user.company.bs}
            </td>
            <td>
                <div class="d-flex align-items-center justify-content-center">
                    <button class="btn btn-dark me-2" onclick = "editUsers(${user.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger me-2" onclick = "deleteUsers(${user.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        `
        tbody.appendChild(row);
    })
}
setUsers();

const deleteUsers = async (id) => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(res);
    alert("Muvaffaqiyatli o'chirildi")
    getUsers()

}


const editUsers = async (id) => {
   console.log( getUser(id));

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}` , {

        name: "Muhammadali",
    })
    alert("Muvaffaqiyatli o'zgartirildi")
    console.log(res.data);
}
