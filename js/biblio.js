window.onload = function () {
    //------------- ELEMENTS
    let nav = document.getElementById('nav');
    let openMenu = document.querySelector('#open');
    let closeMenu = document.getElementById('close');

    let sectionOne = document.getElementById('SECTION_ONE');
    let sectionTwo = document.getElementById('SECTION_TWO');
    let sectionThree = document.getElementById('SECTION_THREE');
    let sectionFour = document.getElementById('SECTION_FOUR');

    let button = document.getElementsByClassName('button');
    let protocolsContainer = document.getElementsByClassName('protocols-container');

    //------------- LISTENERS
    openMenu.addEventListener("click", () => {
        console.log('hola')
        nav.classList.remove("hide-menu");
    });

    closeMenu.addEventListener("click", () => {
        nav.classList.add("hide-menu");
    });

    sectionOne.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[0].classList.add('active');
            e.target.classList.add('button-little');
            if (button[0].className === 'button button-little') {
                button[0].style.margin = "2.5% 0% 0% 0%";
            }
        } else if (e.target && e.target.className === 'button button-little') {
            protocolsContainer[0].classList.remove('active');
            button[0].classList.remove('button-little');
        }
    })
    sectionTwo.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[1].classList.add('active');
            e.target.classList.add('button-little');
        } else if (e.target && e.target.className === 'button button-little') {
            protocolsContainer[1].classList.remove('active');
            button[1].classList.remove('button-little');
        }
    })
    sectionThree.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[2].classList.add('active');
            e.target.classList.add('button-little');
        } else if (e.target && e.target.className === 'button button-little') {
            protocolsContainer[2].classList.remove('active');
            button[2].classList.remove('button-little');
        }
    })
    sectionFour.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[3].classList.add('active');
            e.target.classList.add('button-little');
        } else if (e.target && e.target.className === 'button button-little') {
            protocolsContainer[3].classList.remove('active');
            button[3].classList.remove('button-little');
        }
    })
}