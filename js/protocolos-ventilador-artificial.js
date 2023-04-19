window.onload = function () {
    //------------- ELEMENTS
    let sectionMain = document.querySelector('.section-main');
    let sectionProtocols = document.querySelector('.section-protocols');

    let sectionOne = document.getElementById('SECTION_ONE');
    let sectionTwo = document.getElementById('SECTION_TWO');
    let sectionThree = document.getElementById('SECTION_THREE');
    let sectionFour = document.getElementById('SECTION_FOUR');
    let sectionFive = document.getElementById('SECTION_FIVE');
    let sectionSix = document.getElementById('SECTION_SIX');
    let sectionSeven = document.getElementById('SECTION_SEVEN');
    let sectionEight = document.getElementById('SECTION_EIGHT');
    let sectionNine = document.getElementById('SECTION_NINE');

    //let buttonGuide = document.getElementById('BUTTON_GUIDE');
    //let buttonBiblio = document.getElementById('BUTTON_BIBLIO');
    let button = document.getElementsByClassName('button');
    let protocolsContainer = document.getElementsByClassName('protocols-container');

    //------------- LISTENERS
    sectionMain.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'BUTTON_GUIDE') {
            sectionMain.classList.add('hide');
            sectionProtocols.classList.remove('hide');
        }
    })
    sectionOne.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[0].classList.add('active');
            e.target.classList.add('button-little');
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
    sectionFive.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[4].classList.add('active');
            e.target.classList.add('button-little');
        } else if (e.target && e.target.className === 'button button-little') {
            protocolsContainer[4].classList.remove('active');
            button[4].classList.remove('button-little');
        }
    })
    sectionSix.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[5].classList.add('active');
            e.target.classList.add('button-little');
        } else if (e.target && e.target.className === 'button button-little') {
            protocolsContainer[5].classList.remove('active');
            button[5].classList.remove('button-little');
        }
    })
    sectionSeven.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[6].classList.add('active');
            e.target.classList.add('button-little');
        } else if (e.target && e.target.className === 'button button-little') {
            protocolsContainer[6].classList.remove('active');
            button[6].classList.remove('button-little');
        }
    })
    sectionEight.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[7].classList.add('active');
            e.target.classList.add('button-little');
        } else if (e.target && e.target.className === 'button button-little') {
            protocolsContainer[7].classList.remove('active');
            button[7].classList.remove('button-little');
        }
    })
    sectionNine.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[8].classList.add('active');
            e.target.classList.add('button-little');
        } else if (e.target && e.target.className === 'button button-little') {
            protocolsContainer[8].classList.remove('active');
            button[8].classList.remove('button-little');
        }
    })

}