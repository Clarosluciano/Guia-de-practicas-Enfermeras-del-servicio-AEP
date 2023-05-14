window.onload = function () {
    //------------- ELEMENTS
    let sectionMain = document.querySelector('.section-main');
    let sectionProtocols = document.querySelector('.section-protocols');

    let sectionOne = document.getElementById('SECTION_ONE');
    let sectionTwo = document.getElementById('SECTION_TWO');
    let sectionThree = document.getElementById('SECTION_THREE');

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
}