import { randomize } from "./funciones.js";


// $(document).on("click", ".open-AddBookDialog_seccion_imagenes", function () {
//     var id_imagen = $(this).val();

//     $( "#modal_informacion_imagen .informacion_de_imagen").children().remove();

//     $.ajax({
//         type: "POST",
//         url:  base_url +"/controllers/competidor.php?function=obtener_informacion_de_imagen/"+id_imagen,
//         data: {	          		           
//                },
//         dataType: "json",
//         async:true,
//         success: function(data){		
//                 $( "#modal_informacion_imagen .informacion_de_imagen").append( data );     
//         }
//     });

//     $( "#modal_informacion_imagen .informacion_de_imagen").append( "NO ANDA LA URL DEL AJAX CONIO" );     
//     $('#modal_informacion_imagen').modal('show');	
// });

// Opción 1
// Ejecución por default para cargar las imagenes
// (() => {
//     const xhr = new XMLHttpRequest(); // Objeto que hace la request
//     const $fragment = document.createDocumentFragment(); // Fragmento del documento
//     const $divResultado = document.getElementById('test') // Div donde se colocarán las imgs

//     // Event listener para cada cambio de estado del request
//     xhr.addEventListener('readystatechange', (e) =>{
//         // Solo nos interesa el 4 (completado), por lo que si es otro, detenemos ejecución.
//         if(xhr.readyState !== 4) return false;

//         console.log(xhr);

//         // Si el status es 200, significa que todo salió bien
//         if(xhr.status >= 200 && xhr.status < 300){
//             console.log("exito");
//             console.log(xhr.responseText)
//             // responseText es el json en formato string.
//             // Hay que llamar a JSON.parse para convertirlo a objeto
//             let json = JSON.parse(xhr.responseText);
//             console.log(json);

//             // Como solo queremos 5, for de 5 iteraciones
//             for(let i = 0; i < 5; i++){
//                 // Creamos el elemento img que albergará la imagen
//                 const $img = document.createElement('img')
//                 // Seteamos los atributos src para la url e id para el modal
//                 $img.setAttribute('src',json[i].thumbnailUrl)
//                 $img.setAttribute('id',json[i].id)
//                 // Colocamos el img en el fragmento
//                 $fragment.appendChild($img);
//             }
//             // El fragmento final, es colocado en el div resultado
//             $divResultado.appendChild($fragment)

//             // Una vez finalizado la creación del div con imgs, falta el comportamiento del modal
//             // Obtenemos todos los elementos img
//             const $imgs = document.querySelectorAll('#test img');

//             // Recorremos todo el conjuntos de elementos y le aplicamos un event listener para click
//             $imgs.forEach((el) => {
//                 el.addEventListener('click', (e) => {
//                     // Llamamos a getDatos, le damos url y la id de la imagen mediante el target del evento
//                     // getDatos se encargará de llenar el modal y abrirlo
//                     getDatos('https://jsonplaceholder.typicode.com/albums/1/photos?id='+e.target.id)
//                 })
//             })
//         }else{
//             // Si el status no es 200, mostramos error en consola
//             console.log(`error: ${xhr.status}: ${message} `)
//         }
//     })

//     // Hacemos el request. Como es GET, el envío de datos de nuestra parte  es nulo.
//     xhr.open('GET','https://jsonplaceholder.typicode.com/albums/1/photos'); 
//     xhr.send(null);
// })()

// /**
//  * Obtiene los datos de una imagen, actualiza y muestra el modal
//  * @param {string} url 
//  */
// const getDatos = (url) => {
//     const xhr = new XMLHttpRequest(); // Objeto que hace la request
//     const $modalBody = document.getElementById('exampleModalBody') // El cuerpo del modal
//     const $modalTitle = document.getElementById('exampleModalLabel'); // El titulo del modal
//     const $myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {}); // El objeto modal de bootstrap para poder ocultarlo/mostrarlo

//     // Tal como en el anterior caso, event listener para cada cambio de estado
//     xhr.addEventListener('readystatechange', (e) =>{
//         // Solo nos interesa el estado 4 (completado), de resto detenemos ejecución
//         if(xhr.readyState !== 4) return false;

//         console.log(xhr);

//         // Si es estado es 200, todo salió bien
//         if(xhr.status >= 200 && xhr.status < 300){
//             console.log("exito");
//             console.log(xhr.responseText)
//             // responseText devuelve el json en formato string. Hay que usar JSON.parse para convertirlo a objeto
//             let json = JSON.parse(xhr.responseText);
//             // Solo tendremos uno a la vez, por lo que no es necesario el arreglo
//             json = json[0];
//             console.log(json);

//             // Cambiamos el cuerpo del modal con los datos del json
//             $modalBody.innerHTML = `
//                 Id del album: ${json.albumId}<br>
//                 Id de la imagen ${json.id}<br>
//                 Título: ${json.title}<br>
//                 Thumbnail Url: ${json.thumbnailUrl}<br>
//                 Url: ${json.url}
//                 `;
//             // Cambiamos el título del modal con los datos del json
//             $modalTitle.innerHTML = "Información de la imagen "+json.id;
//             // Mostramos el modal
//             $myModal.show();

//         }else{
//             // Si el status no es 200, mostramos error en consola
//             console.log(`error: ${xhr.status}: ${message} `)
//         }
//     })

//     // Hacemos el request. Como es GET, el envío de datos de nuestra parte es nulo.
//     xhr.open('GET',url); 
//     xhr.send(null);
// }


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