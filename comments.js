const getComments = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/comments/?_limit=100")
    return res.data;
}


const tbody = document.querySelector("tbody");
const setComments = async()=>{
    const comments = await getComments();
    console.log(comments);

    comments.map((comment, i)=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${comment.postId}</td>
            <td>${comment.id}</td>
            <td>${comment.name}</td>
            <td>${comment.email}</td>
            <td>${comment.body}</td>
            <td>
                <div class="d-flex align-items-center justify-content-center">
                    <button class="btn btn-dark me-2" onclick = "editComments(${comment.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger me-2" onclick = "deleteComments(${comment.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        `
        tbody.appendChild(row);
    })
}

setComments();

const editComments = async (id)=>{
    res = await axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`);
    console.log(res);
    alert("Muvaffaqiyatli o'zgartirildi");
    setComments();
}

const deleteComments = async (id)=>{
    res = await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
    console.log(res);
    alert("Muvaffaqiyatli o'chirildi");
    setComments();
}