function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('.video');
    video.pause();
    trailer.classList.toggle('active');
}
function changeBg(bg,title){
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.contents');
    banner.style.background=url("./movies/")
}