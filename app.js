function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    };
};

const check = document.querySelector('#check');
const navbarLinks = document.querySelectorAll('.navbarul a');

function removeNav() {
    const navbarList = document.querySelector('.navbarul');
    navbarList.classList.toggle('revealNav');
};


reveal()
window.addEventListener('scroll', reveal);

check.addEventListener('click', removeNav);

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener('click', removeNav);
};
