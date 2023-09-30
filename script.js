let srSlides = document.querySelectorAll('.slide');
let srSliderCounter = 0;

srSlides.forEach((item, index) => {
    item.style.left = `${index * 100}%`;
});

// load all slide

const loadSlider = () => {
    srSlides.forEach((item, index) => {
        item.style.transform = `translateX(-${srSliderCounter * 100}%)`;
    });
    loadDots();
};

// slider button

const goLeft = () => {
    if (srSlides.length - 1 > srSliderCounter) {
        srSliderCounter++;
    }
    console.log(srSliderCounter);
    loadSlider();
};

const goRight = () => {
    if (0 < srSliderCounter) {
        srSliderCounter--;
    }
    loadSlider();
};

// load all dots
let loadDots = () => {
    let dots = document.querySelector('.sr-slider__dots');
    dots.replaceChildren();
    srSlides.forEach((item, index) => {
        let span = document.createElement('span');
        if (index === srSliderCounter) {
            span.classList.toggle('dot-active');
        }
        span.setAttribute('onclick', `selectDot('${index}')`);
        dots.appendChild(span);
    });
};

let selectDot = (id) => {
    srSliderCounter = parseInt(id);
    loadSlider();
};

// initial load and slide
setInterval(() => {
    console.log('time');
    if (srSlides.length - 1 > srSliderCounter) {
        srSliderCounter++;
        loadSlider();
    } else {
        srSliderCounter = 0;
        loadSlider();
    }
}, 6000);

loadSlider();
