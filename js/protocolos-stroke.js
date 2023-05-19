window.onload = function () {
    //------------- ELEMENTS
    let sectionMain = document.querySelector('.section-main');
    let sectionProtocols = document.querySelector('.section-protocols');

    let sectionOne = document.getElementById('SECTION_ONE');
    let sectionTwo = document.getElementById('SECTION_TWO');
    let sectionThree = document.getElementById('SECTION_THREE');
    let sectionFour = document.getElementById('SECTION_FOUR');
    let sectionFive = document.getElementById('SECTION_FIVE');

    let button = document.getElementsByClassName('button');
    let protocolsContainer = document.getElementsByClassName('protocols-container');

    let nihssOne = document.getElementById('NIHSS_ONE');
    let nihssTwo = document.getElementById('NIHSS_TWO');
    let nihssThree = document.getElementById('NIHSS_THREE');
    let nihssFour = document.getElementById('NIHSS_FOUR');
    let nihssFive = document.getElementById('NIHSS_FIVE');
    let nihssSix = document.getElementById('NIHSS_SIX');
    let nihssSeven = document.getElementById('NIHSS_SEVEN');
    let nihssEight = document.getElementById('NIHSS_EIGHT');
    let nihssNine = document.getElementById('NIHSS_NINE');
    let nihssTen = document.getElementById('NIHSS_TEN');
    let nihssEleven = document.getElementById('NIHSS_ELEVEN');
    let nihssTwelve = document.getElementById('NIHSS_TWELVE');
    let nihssThirteen = document.getElementById('NIHSS_THIRTEEN');
    let nihssFourteen = document.getElementById('NIHSS_FOURTEEN');
    let nihssFifteen = document.getElementById('NIHSS_FIFTEEN');

    let nihssBtn = document.getElementsByClassName('nihss-button');

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

    //------------- CALCULATOR
    nihssOne.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[0].className === 'nihss-button selected') {
                nihssBtn[0].classList.toggle('selected');
            } else if (nihssBtn[1].className === 'nihss-button selected') {
                nihssBtn[1].classList.toggle('selected');
            } else if (nihssBtn[2].className === 'nihss-button selected') {
                nihssBtn[2].classList.toggle('selected');
            } else if (nihssBtn[3].className === 'nihss-button selected') {
                nihssBtn[3].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[3].className === 'nihss-button selected') {
                nihssBtn[3].classList.toggle('selected');
            } else if (nihssBtn[2].className === 'nihss-button selected') {
                nihssBtn[2].classList.toggle('selected');
            } else if (nihssBtn[1].className === 'nihss-button selected') {
                nihssBtn[1].classList.toggle('selected');
            } else if (nihssBtn[0].className === 'nihss-button selected') {
                nihssBtn[0].classList.toggle('selected');
            }
        }
    })
    nihssTwo.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[4].className === 'nihss-button selected') {
                nihssBtn[4].classList.toggle('selected');
            } else if (nihssBtn[5].className === 'nihss-button selected') {
                nihssBtn[5].classList.toggle('selected');
            } else if (nihssBtn[6].className === 'nihss-button selected') {
                nihssBtn[6].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[6].className === 'nihss-button selected') {
                nihssBtn[6].classList.toggle('selected');
            } else if (nihssBtn[5].className === 'nihss-button selected') {
                nihssBtn[5].classList.toggle('selected');
            } else if (nihssBtn[4].className === 'nihss-button selected') {
                nihssBtn[4].classList.toggle('selected');
            }
        }
    })
    nihssThree.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[7].className === 'nihss-button selected') {
                nihssBtn[7].classList.toggle('selected');
            } else if (nihssBtn[8].className === 'nihss-button selected') {
                nihssBtn[8].classList.toggle('selected');
            } else if (nihssBtn[9].className === 'nihss-button selected') {
                nihssBtn[9].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[9].className === 'nihss-button selected') {
                nihssBtn[9].classList.toggle('selected');
            } else if (nihssBtn[8].className === 'nihss-button selected') {
                nihssBtn[8].classList.toggle('selected');
            } else if (nihssBtn[7].className === 'nihss-button selected') {
                nihssBtn[7].classList.toggle('selected');
            }
        }
    })
    nihssFour.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[10].className === 'nihss-button selected') {
                nihssBtn[10].classList.toggle('selected');
            } else if (nihssBtn[11].className === 'nihss-button selected') {
                nihssBtn[11].classList.toggle('selected');
            } else if (nihssBtn[12].className === 'nihss-button selected') {
                nihssBtn[12].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[12].className === 'nihss-button selected') {
                nihssBtn[12].classList.toggle('selected');
            } else if (nihssBtn[11].className === 'nihss-button selected') {
                nihssBtn[11].classList.toggle('selected');
            } else if (nihssBtn[10].className === 'nihss-button selected') {
                nihssBtn[10].classList.toggle('selected');
            }
        }
    })
    nihssFive.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[13].className === 'nihss-button selected') {
                nihssBtn[13].classList.toggle('selected');
            } else if (nihssBtn[14].className === 'nihss-button selected') {
                nihssBtn[14].classList.toggle('selected');
            } else if (nihssBtn[15].className === 'nihss-button selected') {
                nihssBtn[15].classList.toggle('selected');
            } else if (nihssBtn[16].className === 'nihss-button selected') {
                nihssBtn[16].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[16].className === 'nihss-button selected') {
                nihssBtn[16].classList.toggle('selected');
            } else if (nihssBtn[15].className === 'nihss-button selected') {
                nihssBtn[15].classList.toggle('selected');
            } else if (nihssBtn[14].className === 'nihss-button selected') {
                nihssBtn[14].classList.toggle('selected');
            } else if (nihssBtn[13].className === 'nihss-button selected') {
                nihssBtn[13].classList.toggle('selected');
            }
        }
    })
    nihssSix.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[17].className === 'nihss-button selected') {
                nihssBtn[17].classList.toggle('selected');
            } else if (nihssBtn[18].className === 'nihss-button selected') {
                nihssBtn[18].classList.toggle('selected');
            } else if (nihssBtn[19].className === 'nihss-button selected') {
                nihssBtn[19].classList.toggle('selected');
            } else if (nihssBtn[20].className === 'nihss-button selected') {
                nihssBtn[20].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[20].className === 'nihss-button selected') {
                nihssBtn[20].classList.toggle('selected');
            } else if (nihssBtn[19].className === 'nihss-button selected') {
                nihssBtn[19].classList.toggle('selected');
            } else if (nihssBtn[18].className === 'nihss-button selected') {
                nihssBtn[18].classList.toggle('selected');
            } else if (nihssBtn[17].className === 'nihss-button selected') {
                nihssBtn[17].classList.toggle('selected');
            }
        }
    })
    nihssSeven.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[21].className === 'nihss-button selected') {
                nihssBtn[21].classList.toggle('selected');
            } else if (nihssBtn[22].className === 'nihss-button selected') {
                nihssBtn[22].classList.toggle('selected');
            } else if (nihssBtn[23].className === 'nihss-button selected') {
                nihssBtn[23].classList.toggle('selected');
            } else if (nihssBtn[24].className === 'nihss-button selected') {
                nihssBtn[24].classList.toggle('selected');
            } else if (nihssBtn[25].className === 'nihss-button selected') {
                nihssBtn[25].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[25].className === 'nihss-button selected') {
                nihssBtn[25].classList.toggle('selected');
            } else if (nihssBtn[24].className === 'nihss-button selected') {
                nihssBtn[24].classList.toggle('selected');
            } else if (nihssBtn[23].className === 'nihss-button selected') {
                nihssBtn[23].classList.toggle('selected');
            } else if (nihssBtn[22].className === 'nihss-button selected') {
                nihssBtn[22].classList.toggle('selected');
            } else if (nihssBtn[21].className === 'nihss-button selected') {
                nihssBtn[21].classList.toggle('selected');
            }
        }
    })
    nihssEight.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[26].className === 'nihss-button selected') {
                nihssBtn[26].classList.toggle('selected');
            } else if (nihssBtn[27].className === 'nihss-button selected') {
                nihssBtn[27].classList.toggle('selected');
            } else if (nihssBtn[28].className === 'nihss-button selected') {
                nihssBtn[28].classList.toggle('selected');
            } else if (nihssBtn[29].className === 'nihss-button selected') {
                nihssBtn[29].classList.toggle('selected');
            } else if (nihssBtn[30].className === 'nihss-button selected') {
                nihssBtn[30].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[30].className === 'nihss-button selected') {
                nihssBtn[30].classList.toggle('selected');
            } else if (nihssBtn[29].className === 'nihss-button selected') {
                nihssBtn[29].classList.toggle('selected');
            } else if (nihssBtn[28].className === 'nihss-button selected') {
                nihssBtn[28].classList.toggle('selected');
            } else if (nihssBtn[27].className === 'nihss-button selected') {
                nihssBtn[27].classList.toggle('selected');
            } else if (nihssBtn[26].className === 'nihss-button selected') {
                nihssBtn[26].classList.toggle('selected');
            }
        }
    })
    nihssNine.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[31].className === 'nihss-button selected') {
                nihssBtn[31].classList.toggle('selected');
            } else if (nihssBtn[32].className === 'nihss-button selected') {
                nihssBtn[32].classList.toggle('selected');
            } else if (nihssBtn[33].className === 'nihss-button selected') {
                nihssBtn[33].classList.toggle('selected');
            } else if (nihssBtn[34].className === 'nihss-button selected') {
                nihssBtn[34].classList.toggle('selected');
            } else if (nihssBtn[35].className === 'nihss-button selected') {
                nihssBtn[35].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[35].className === 'nihss-button selected') {
                nihssBtn[35].classList.toggle('selected');
            } else if (nihssBtn[34].className === 'nihss-button selected') {
                nihssBtn[34].classList.toggle('selected');
            } else if (nihssBtn[33].className === 'nihss-button selected') {
                nihssBtn[33].classList.toggle('selected');
            } else if (nihssBtn[32].className === 'nihss-button selected') {
                nihssBtn[32].classList.toggle('selected');
            } else if (nihssBtn[31].className === 'nihss-button selected') {
                nihssBtn[31].classList.toggle('selected');
            }
        }
    })
    nihssTen.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[36].className === 'nihss-button selected') {
                nihssBtn[36].classList.toggle('selected');
            } else if (nihssBtn[37].className === 'nihss-button selected') {
                nihssBtn[37].classList.toggle('selected');
            } else if (nihssBtn[38].className === 'nihss-button selected') {
                nihssBtn[38].classList.toggle('selected');
            } else if (nihssBtn[39].className === 'nihss-button selected') {
                nihssBtn[39].classList.toggle('selected');
            } else if (nihssBtn[40].className === 'nihss-button selected') {
                nihssBtn[40].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[40].className === 'nihss-button selected') {
                nihssBtn[40].classList.toggle('selected');
            } else if (nihssBtn[39].className === 'nihss-button selected') {
                nihssBtn[39].classList.toggle('selected');
            } else if (nihssBtn[38].className === 'nihss-button selected') {
                nihssBtn[38].classList.toggle('selected');
            } else if (nihssBtn[37].className === 'nihss-button selected') {
                nihssBtn[37].classList.toggle('selected');
            } else if (nihssBtn[36].className === 'nihss-button selected') {
                nihssBtn[36].classList.toggle('selected');
            }
        }
    })
    nihssEleven.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[41].className === 'nihss-button selected') {
                nihssBtn[41].classList.toggle('selected');
            } else if (nihssBtn[42].className === 'nihss-button selected') {
                nihssBtn[42].classList.toggle('selected');
            } else if (nihssBtn[43].className === 'nihss-button selected') {
                nihssBtn[43].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[43].className === 'nihss-button selected') {
                nihssBtn[43].classList.toggle('selected');
            } else if (nihssBtn[42].className === 'nihss-button selected') {
                nihssBtn[42].classList.toggle('selected');
            } else if (nihssBtn[41].className === 'nihss-button selected') {
                nihssBtn[41].classList.toggle('selected');
            }
        }
    })
    nihssTwelve.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[44].className === 'nihss-button selected') {
                nihssBtn[44].classList.toggle('selected');
            } else if (nihssBtn[45].className === 'nihss-button selected') {
                nihssBtn[45].classList.toggle('selected');
            } else if (nihssBtn[46].className === 'nihss-button selected') {
                nihssBtn[46].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[46].className === 'nihss-button selected') {
                nihssBtn[46].classList.toggle('selected');
            } else if (nihssBtn[45].className === 'nihss-button selected') {
                nihssBtn[45].classList.toggle('selected');
            } else if (nihssBtn[44].className === 'nihss-button selected') {
                nihssBtn[44].classList.toggle('selected');
            }
        }
    })
    nihssThirteen.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[47].className === 'nihss-button selected') {
                nihssBtn[47].classList.toggle('selected');
            } else if (nihssBtn[48].className === 'nihss-button selected') {
                nihssBtn[48].classList.toggle('selected');
            } else if (nihssBtn[49].className === 'nihss-button selected') {
                nihssBtn[49].classList.toggle('selected');
            } else if (nihssBtn[50].className === 'nihss-button selected') {
                nihssBtn[50].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[50].className === 'nihss-button selected') {
                nihssBtn[50].classList.toggle('selected');
            } else if (nihssBtn[49].className === 'nihss-button selected') {
                nihssBtn[49].classList.toggle('selected');
            } else if (nihssBtn[48].className === 'nihss-button selected') {
                nihssBtn[48].classList.toggle('selected');
            } else if (nihssBtn[47].className === 'nihss-button selected') {
                nihssBtn[47].classList.toggle('selected');
            }
        }
    })
    nihssFourteen.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[51].className === 'nihss-button selected') {
                nihssBtn[51].classList.toggle('selected');
            } else if (nihssBtn[52].className === 'nihss-button selected') {
                nihssBtn[52].classList.toggle('selected');
            } else if (nihssBtn[53].className === 'nihss-button selected') {
                nihssBtn[53].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[53].className === 'nihss-button selected') {
                nihssBtn[53].classList.toggle('selected');
            } else if (nihssBtn[52].className === 'nihss-button selected') {
                nihssBtn[52].classList.toggle('selected');
            } else if (nihssBtn[51].className === 'nihss-button selected') {
                nihssBtn[51].classList.toggle('selected');
            }
        }
    })
    nihssFifteen.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[54].className === 'nihss-button selected') {
                nihssBtn[54].classList.toggle('selected');
            } else if (nihssBtn[55].className === 'nihss-button selected') {
                nihssBtn[55].classList.toggle('selected');
            } else if (nihssBtn[56].className === 'nihss-button selected') {
                nihssBtn[56].classList.toggle('selected');
            }
        }
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[56].className === 'nihss-button selected') {
                nihssBtn[56].classList.toggle('selected');
            } else if (nihssBtn[55].className === 'nihss-button selected') {
                nihssBtn[55].classList.toggle('selected');
            } else if (nihssBtn[54].className === 'nihss-button selected') {
                nihssBtn[54].classList.toggle('selected');
            }
        }
    })
}