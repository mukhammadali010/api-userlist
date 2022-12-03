const getPosts = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/?_limit=100")
    return res.data;
}


const tbody = document.querySelector("tbody");
const setPosts = async()=>{
    const posts = await getPosts();
    console.log(posts);

    posts.map((post, i)=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
            <td>
                <div class="d-flex align-items-center justify-content-center">
                    <button class="btn btn-dark me-2" onclick = "editPosts(${post.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger me-2" onclick = "deletePosts(${post.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        `
        tbody.appendChild(row);
    })
}

setPosts();

const editPosts = async (id)=>{
    res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(res);
    alert("Muvaffaqiyatli o'zgartirildi");
    setPosts();
}

const deletePosts = async (id)=>{
    res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(res);
    alert("Muvaffaqiyatli o'chirildi");
    setPosts();
}