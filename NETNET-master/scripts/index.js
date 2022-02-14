

const contVideos = document.getElementById('populares')

// Funcion de obtener datos
async function getVideos (){
    try {
        const resp = await fetch('http://localhost:4000/videos');
        const data = await resp.json()
        return data
    }catch (error){
        return console.log(error);
    }
}

// Funcion mostrar videos
async function pintarVideos(data) {
    if(data == undefined){
        data = await getVideos()
    }

    contVideos.innerHTML = '';

    data.forEach((video)=> {
        const { id, name, imagen } = video;

        contVideos.innerHTML +=`
        <img onclick="verVideo(${id})" id="${id}" src="${imagen}" alt="${name}">
        `
    })
}

pintarVideos()



const segundaSeccion = document.getElementById("seriesAnime")
    // async function mostrarVideos(data) {
    //     if(data == undefined){
    //         data = await getVideos()
        // }
        async function filterAnimes(){
            const data = await getVideos()
            const result = data.filter((categoria)=> video.categoria === Animes)
            console.log(result)
        
            filterAnimes(result)
            }


        seriesAnime.innerHTML = '';
    
        data.forEach((video)=> {
            const { id, name, imagen, categoria } = video;
            const filtro= video.filter()
            seriesAnime.innerHTML +=`
            <img onclick="verVideo(${id})" id="${id}" src="${imagen}" alt="${name}">
            `
        })
    
    
    mostrarVideos()



// Ver Videos
async function verVideo(id){
    const data = await getVideos();
    const result = data.filter((video)=> video.id === id)
    
    localStorage.setItem('video', JSON.stringify(result))

    window.location.href = '../pelicula.html'
}