import { randomize } from "./funciones.js";

(() => {
    const $fragment = document.createDocumentFragment(); // Fragmento del documento
    const $divResultado = document.getElementById('test') // Div donde se colocarán las imgs

    // Llamado ajax
    $.ajax({
        type: "GET", // metodo
        url: "https://jsonplaceholder.typicode.com/albums/1/photos", //url
        dataType: "json", //convierte a json de una
        success: (data) => {
            console.log(data);

            data = randomize(data); // ***** Ver si hay una forma más eficiente

            // Como solo queremos 5, for de 5 iteraciones
            for(let i = 0; i < 5; i++){
                const $figure = document.createElement('figure')
                $figure.innerHTML = `
                    <img src="${data[i].thumbnailUrl}" alt="${data[i].title}" id="${data[i].id}" class="img-fluid"><br>
                    <a href="#">${data[i].title}</a>
                `
                $figure.classList.add('col-12','col-md-4','col-lg-2','text-center')
                $fragment.appendChild($figure);
            }

            // El fragmento final, es colocado en el div resultado
            $divResultado.appendChild($fragment)

            // Una vez finalizado la creación del div con imgs, falta el comportamiento del modal
            // Obtenemos todos los elementos img
            const $imgs = document.querySelectorAll('#test figure');

            // Recorremos todo el conjunto de elementos y le aplicamos un event listener para click
            $imgs.forEach((el) => {
                el.addEventListener('click', (e) => {
                    // Llamamos a getDatos, le damos url y la id de la imagen mediante el target del evento
                    // getDatos se encargará de llenar el modal y abrirlo
                    getDatos('https://jsonplaceholder.typicode.com/albums/1/photos?id='+e.target.id)
                })
            })
        },
        error: (jqXHR, textStatus, errorThrown) => {
            // Manejo de errores tomado de https://cybmeta.com/manejo-de-errores-en-jquery-ajax
            if (jqXHR.status === 0) {
                console.log('Not connect: Verify Network.');
            } else if (jqXHR.status == 404) {
                console.log('Requested page not found [404]');
            } else if (jqXHR.status == 500) {
                console.log('Internal Server Error [500].');
            } else if (textStatus === 'parsererror') {
                console.log('Requested JSON parse failed.');
            } else if (textStatus === 'timeout') {
                console.log('Time out error.');
            } else if (textStatus === 'abort') {
                console.log('Ajax request aborted.');
            } else {
                console.log('Uncaught Error: ' + jqXHR.responseText);
            }
        }
    })
})()

const getDatos = (url) => {
    const $modalBody = document.getElementById('exampleModalBody') // El cuerpo del modal
    const $modalTitle = document.getElementById('exampleModalLabel'); // El titulo del modal
    const $myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {}); // El objeto modal de bootstrap para poder ocultarlo/mostrarlo

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: (data) => {
            console.log(data);

            // Solo tendremos uno a la vez, por lo que no es necesario el arreglo
            data = data[0];
            console.log(data);

            // Cambiamos el cuerpo del modal con los datos del json
            $modalBody.innerHTML = `
                <strong>Id del album:</strong> ${data.albumId}<br>
                <strong>Id de la imagen:</strong> ${data.id}<br>
                <strong>Título:</strong> ${data.title}<br>
                <strong>Thumbnail Url:</strong> <a href="${data.thumbnailUrl}" target="_blank">${data.thumbnailUrl}</a><br>
                <strong>Url:</strong> <a href="${data.url}" target="_blank">${data.url}</a>
                `;
            // Cambiamos el título del modal con los datos del json
            $modalTitle.innerHTML = "Información de la imagen «"+data.id+"»";
            // Mostramos el modal
            $myModal.show();
        },
        error: (jqXHR, textStatus, errorThrown) => {
            // Manejo de errores tomado de https://cybmeta.com/manejo-de-errores-en-jquery-ajax
            if (jqXHR.status === 0) {
                console.log('Not connect: Verify Network.');
            } else if (jqXHR.status == 404) {
                console.log('Requested page not found [404]');
            } else if (jqXHR.status == 500) {
                console.log('Internal Server Error [500].');
            } else if (textStatus === 'parsererror') {
                console.log('Requested JSON parse failed.');
            } else if (textStatus === 'timeout') {
                console.log('Time out error.');
            } else if (textStatus === 'abort') {
                console.log('Ajax request aborted.');
            } else {
                console.log('Uncaught Error: ' + jqXHR.responseText);
            }
        }
    })
}