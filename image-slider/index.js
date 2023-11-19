var slide_images = document.querySelector('.slider-img');
var images = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg', 'image-5.jpg', 'image-6.jpg', 'image-7.jpg', 'image-8.jpg', 'image-9.jpg', 'image-9.jpg', 'image-10.jpg'];
var i = 0; //current image index

function prev(){
    if(i <=0) i=images.length;
    i--;
    return setImg();
}

function next(){
    if(i>=images.length-1) i= -1;
    i++;
    return setImg();
}

function setImg(){
    return slide_images.setAttribute('src', 'images/' + images[i]);
}