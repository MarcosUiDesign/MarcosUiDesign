const logo = document.querySelector('#logo');
const img_second = document.querySelector('#img_second_about');
const btn_mobile_icon = document.querySelector("#btn_mobile_icon");
const icon_start = document.querySelector("#icon_start");
let mobileBtnOn = false;

const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        const { width } = entry.contentRect;

        //troca a imagem da seção start em telas pequenas e 'x-grande'
        if (width >= 1470 || width <= 768) {
            img_second.src = "./assets/imgs/mobile/secundaria-rosa.png"
        } else {
            img_second.src = "./assets/imgs/web/secundária-rosa.png"
        }

        // telas noramais
        if (width <= 768 && mobileBtnOn) {
            logo.src = './assets/icons/logo.svg';
            document.body.style.backgroundImage = "none";

        } else if (width <= 768 && mobileBtnOn == false) {
            document.body.style.backgroundImage = "url(./assets/imgs/Elementos/bg-mobile-rosa.png)";
            logo.src = './assets/icons/logo-white.svg';
        }
        else {
            logo.src = './assets/icons/logo.svg';
            document.body.style.backgroundImage = "url(./assets/imgs/Elementos/bg-rosa.svg)";

            icon_start.classList.add("midia_ul2");
        }

        //remove a class midia_ul2 em telas pequenas
        if (width <= 768) {
            icon_start.classList.remove("midia_ul2");
        }
    }
});

function menuShow() {
    const menuMobile = document.querySelector('.menu_mobile');
    const start = document.querySelector("#start");

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        start.removeAttribute("hidden")
        mobileBtnOn = false;

        btn_mobile_icon.classList.add('btn_disabled');
        btn_mobile_icon.classList.remove('btn_enabled');

    } else {
        start.setAttribute("hidden", "true");
        menuMobile.classList.add('open');
        mobileBtnOn = true;

        btn_mobile_icon.classList.add('btn_enabled');
        btn_mobile_icon.classList.remove('btn_disabled');
    }
}

observer.observe(document.body);