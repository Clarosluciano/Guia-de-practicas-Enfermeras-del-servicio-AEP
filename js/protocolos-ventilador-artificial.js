window.onload = function () {

    var main = document.getElementById('MAIN');
    var sectionOne = document.getElementById('SECTION_ONE');
    var sectionTwo = document.getElementById('SECTION_TWO');
    var sectionThree = document.getElementById('SECTION_THREE');
    var sectionFour = document.getElementById('SECTION_FOUR');
    var sectionFive = document.getElementById('SECTION_FIVE');
    var sectionSix = document.getElementById('SECTION_SIX');
    var protocolsContainer = document.getElementsByClassName('protocols-container');

    sectionOne.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[0].classList.toggle('active');
            e.target.classList.toggle('button-little');
        }
    })
    sectionTwo.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[1].classList.add('active');
            e.target.classList.add('button-little');
        }
    })
    sectionThree.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[2].classList.toggle('active');
            e.target.classList.toggle('button-little');
        }
    })
    sectionFour.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[3].classList.toggle('active');
            e.target.classList.toggle('button-little');
        }
    })
    sectionFive.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[4].classList.toggle('active');
            e.target.classList.toggle('button-little');
        }
    })
    sectionSix.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'button') {
            protocolsContainer[5].classList.toggle('active');
            e.target.classList.toggle('button-little');
        }
    })

}