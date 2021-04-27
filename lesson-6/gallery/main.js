function openImage(event) {
    console.log(event);

    /* получаем div элемент галерии */
    const gallery = document.getElementsByClassName("gallery")[0];

    /* очищаем галерею */
    gallery.innerHTML = "";

    /* получаем пораждающий событие объект */
	const target = event.target;

    /* получаем data-атрибут с номером картинки */
	const seed = target.dataset.seed;

    /* если номер пустой, то прерываем выполнение */
	if (!seed) {
	    return;
    }

    /* создаем картинку */
	const image = document.createElement("img");

    /* добавляем атрибуты к картинке */
    image.id  = `image-${seed}`;
    // для примера делаю некорректный src
    image.src = `https:///${seed}/800`;
    image.alt = `Изображение ${seed}`;

    //прослушивается событие на загрузку изображения 
    // по указанному src
    image.addEventListener('load',function(){
         /* в случае загрузки добавляем новый блок в галерею */
        gallery.appendChild(image);
    });
    /*прослушивается событие на ошибку загруки изображения*/
    image.addEventListener('error',function(){
        /* в случае ошибки 
        выводитя сообщение об ошибке */
        gallery.innerHTML = '<p>Image loading error</p> ';
    });
 
}



function init() {
    const images = document.querySelectorAll(".thumbnails > img");
   

    for (let image of images) {
        image.addEventListener('click', openImage);
    }
}


window.addEventListener('load', init);