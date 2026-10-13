const getData = async () => {
    try {
        const url = "https://dog.ceo/api/breeds/image/random";
        
        const request = await fetch(url);
        if (!request.ok) {
            throw new Error(`Response status: ${request.status}`);
        }

        const response = await request.json();
        console.log(response);

        const item = document.querySelector("#usuario-card"); 

        item.querySelector("img").src = response.message;
        
        // Extraer la raza de la URL y formatearla (ej: hound-english -> Airedale / Hound English)
        const urlPartes = response.message.split("/");
        const razaCruda = urlPartes[urlPartes.indexOf("breeds") + 1];
        const razaFormateada = razaCruda.charAt(0).toUpperCase() + razaCruda.slice(1).replace("-", " ");

        item.querySelector(".nombre-usuario").textContent = razaFormateada;
        item.querySelector(".web").textContent = response.message;

    } catch (error) {
        console.log("Error: ", error);
    }
}

getData();