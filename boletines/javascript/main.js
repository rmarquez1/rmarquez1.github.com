// DOM
// querySelector: Solo devuelve un elemento aunque existan varios, devuelve el primero
// querySelectorAll: Devuelve todos los elementos
/*let links = document.querySelectorAll("a");

links.forEach(function(link) {
	console.log(link);
});
*/

/*let cells = document.querySelectorAll("td");

cells.forEach(function(td) {
	td.addEventListener('click', function() {
		console.log(this);
	});
});
*/

// Ejemplo 2
// Obtener los elementos de la clase .close
/*let links = document.querySelectorAll(".close");

// Recorrerlos
links.forEach(function(link) {
	// Agregar un evento click a cada uno de ellos;
	link.addEventListener('click', function(ev) {
		// Eliminar el compartamiento por defecto, con preventDefault o return False
		ev.preventDefault();

		return false;

	});
});*/

/* Ejemplo 3. Aca eliminaremos las clases de un selector. Por ejemplo a los iconos les quitaremos la que tiene para estrellas
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono) {
	icono.classList.remove('fa-star');
	icono.classList.add('fa-star');
});
*/

// Ejemplo 4
// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

// Recorrerlos
links.forEach(function(link) {
	// Agregar un evento click a cada uno de ellos;
	link.addEventListener('click', function(ev) {
		ev.preventDefault();
		let content = document.querySelector('.content');

		// Quitaremos las clases de animacion que ya tienen
		content.classList.remove("animate__animated");
		content.classList.remove("animate__fadeInDown");

		// Agregar clases para animar su salida, fadeOutUp
		content.classList.add("animate__animated");
		content.classList.add("animate__fadeOutUp");

		setTimeout(function() {
			location.href = "/";
		}, 600);

	});
});
