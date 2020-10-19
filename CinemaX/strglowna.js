const SlideIn = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar li');
    const element1 = document.querySelector('.element1');
    const element2 = document.querySelector('.element2');
    const element3 = document.querySelector('.element3');
    menu.addEventListener('click', () => {
        
        nav.classList.toggle('nav-active');

        element1.classList.toggle('menu-active1');
        element2.classList.toggle('menu-active2');
        element3.classList.toggle('menu-active3');
        navLinks.forEach((link, index ) => {
            if(link.style.animation)
            {
                link.syle.animation = '';
            }
            else{
            link.style.animation = `navLinks 0.7s ease forwards ${index / 7}s`;
            }
        })
        });
}
    SlideIn();