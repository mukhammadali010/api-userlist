const getAlbums = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/albums")
        return res.data;
    } catch (error) {
        return []
    }
}


const tbody = document.querySelector('tbody')
const setAlbums = async () => {
    const albums = await getAlbums();
    console.log(albums);
    tbody.innerHTML = "";

    
    albums.map((album, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${album.userId}</td>
        <td>${album.id}</td>
        <td>${album.title}</td>
        <td>
            <div class="d-flex align-items-center justify-content-center">
                <button class="btn btn-dark me-2" onclick = "editAlbums(${album.id})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger me-2" onclick = "deleteAlbums(${album.id})"><i class="fas fa-trash"></i></button>
            </div>
        </td>
    `
    tbody.appendChild(row);
    })

}
setAlbums()

const editAlbums = async(id)=>{
    res = await axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`)
    console.log(res);
    alert("Muvaffaqiyatli o'zgartirldi");
    setAlbums();
}

const deleteAlbums = async(id)=>{
    res = await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
    console.log(res);
    alert("Muvaffaqiyatli o'chirildi")
    setAlbums();
}

