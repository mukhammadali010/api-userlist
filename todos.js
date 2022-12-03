const getTodos = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=100")
    return res.data;
}


const tbody = document.querySelector("tbody");
const setTodos = async()=>{
    const todos = await getTodos();
    console.log(todos);

    todos.map((todo, i)=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${todo.userId}</td>
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.completed}</td>
            <td>
                <div class="d-flex align-items-center justify-content-center">
                    <button class="btn btn-dark me-2" onclick = "editTodos(${todo.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger me-2" onclick = "deleteTodos(${todo.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        `
        tbody.appendChild(row);
    })
}

setTodos();

const editTodos = async (id)=>{
    res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log(res);
    alert("Muvaffaqiyatli o'zgartirildi");
    setTodos();
}

const deleteTodos = async (id)=>{
    res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log(res);
    alert("Muvaffaqiyatli o'chirildi");
    setTodos();
}