const numPain = document.querySelector('.icon-pains')
const titlePains = document.querySelector('.title-pains')
const descriptionPains = document.querySelector('.description-pains')
const numbers = document.querySelectorAll('.number')

function changeNum(num) {
    update(num)
}

function update(num) {
    if (num === 1) {
        numPain.textContent = '01'
        titlePains.textContent = 'Não entende por onde começar'
        descriptionPains.textContent = 'Você até quer aprender programação, mas a quantidade de conteúdos e caminhos diferentes te deixa travado antes mesmo de iniciar.'

        for (let index = 0; index < 4; index++) {
            numbers[index].classList.remove('active')
        }

        numbers[0].classList.add('active')
    }
    if (num === 2) {
        numPain.textContent = '02'
        titlePains.textContent = 'Vê muitos cursos teóricos e pouco práticos'
        descriptionPains.textContent = 'A maioria ensina conceitos soltos, sem mostrar como eles se conectam na prática — e no final você sente que só assistiu aulas, não aprendeu de verdade.'

        for (let index = 0; index < 4; index++) {
            numbers[index].classList.remove('active')
        }

        numbers[1].classList.add('active')
    }
    if (num === 3) {
        numPain.textContent = '03'
        titlePains.textContent = 'Aprende, mas não consegue criar nada sozinho'
        descriptionPains.textContent = 'Você acompanha o professor, entende na hora, mas quando tenta fazer um projeto do zero, tudo parece confuso e nada sai do papel.'

        for (let index = 0; index < 4; index++) {
            numbers[index].classList.remove('active')
        }

        numbers[2].classList.add('active')
    }
    if (num === 4) {
        numPain.textContent = '04'
        titlePains.textContent = 'Se sente perdido entre HTML, CSS e JavaScript'
        descriptionPains.textContent = 'Não sabe o papel de cada tecnologia, quando usar uma ou outra, e acaba misturando tudo sem entender como funciona um site de verdade.'

        for (let index = 0; index < 4; index++) {
            numbers[index].classList.remove('active')
        }

        numbers[3].classList.add('active')
    }
}


/** 
[x] Saber qual botão foi clicado;
[x] Adicionar: transform: translateX(-500px);
[] Quando o botão for clicado, o item que passou, vai para os ultimos;
*/

const btnLeft = document.querySelector('.arrow-left')
const btnRight = document.querySelector('.arrow-right')

const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelectorAll('.carousel-item')
let counterSlider = 0;
let i = 0;

btnLeft.addEventListener('click', () => slider(500));
btnRight.addEventListener('click', () => slider(-500));

console.log(btnLeft, btnRight);

function getItemWidth() {
    const item = carousel.querySelector('.carousel-item');
    const gap = parseInt(getComputedStyle(carousel).gap) || 0;
    return item.offsetWidth + gap;
}

btnRight.addEventListener('click', () => {
    const moveX = getItemWidth();

    carousel.style.transition = 'transform 0.3s ease';
    carousel.style.transform = `translateX(-${moveX}px)`;

    carousel.addEventListener('transitionend', () => {
        carousel.style.transition = 'none';

        carousel.appendChild(carousel.firstElementChild);

        carousel.style.transform = 'translateX(0)';
    }, { once: true });
});

btnLeft.addEventListener('click', () => {
    const moveX = getItemWidth();

    carousel.style.transition = 'none';

    carousel.insertBefore(
        carousel.lastElementChild,
        carousel.firstElementChild
    );

    carousel.style.transform = `translateX(-${moveX}px)`;

    requestAnimationFrame(() => {
        carousel.style.transition = 'transform 0.3s ease';
        carousel.style.transform = 'translateX(0)';
    });
});
