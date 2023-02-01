const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu ul');

    burger.addEventListener('click', () => {
        nav.classList.toggle('.menu-active');
    });
}

navSlide();