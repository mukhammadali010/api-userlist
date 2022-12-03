const getPhotos = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos/?_limit=100")
    return res.data;
}


const tbody = document.querySelector("tbody");
const setPhotos = async()=>{
    const photos = await getPhotos();
    console.log(photos);

    photos.map((photo , i)=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${photo.albumId}</td>
            <td>${photo.id}</td>
            <td>${photo.title}</td>
            <td><a href = "${photo.url}" target = "_blank">${photo.url}</a></td>
            <td><a href = "${photo.thumbnailUrl}" target = "_blank">${photo.thumbnailUrl}</a></td>
            <td>
                <div class="d-flex align-items-center justify-content-center">
                    <button class="btn btn-dark me-2" onclick = "editPhotos(${photo.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger me-2" onclick = "deletePhotos(${photo.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        `
        tbody.appendChild(row);
    })
}

setPhotos();

const editPhotos = async (id)=>{
    res = await axios.put(`https://jsonplaceholder.typicode.com/photos/${id}`);
    console.log(res);
    alert("Muvaffaqiyatli o'zgartirildi");
    setPhotos();
}

const deletePhotos = async (id)=>{
    res = await axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);
    console.log(res);
    alert("Muvaffaqiyatli o'chirildi");
    setPhotos();
}