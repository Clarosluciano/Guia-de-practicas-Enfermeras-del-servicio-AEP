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
    //nuevo formato: que aparezca de a uno y que solo acumule.
    let result = document.getElementById('RESULT');
    let initial = 0;

    nihssOne.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[0].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[1].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[2].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            } else if (nihssBtn[3].className === 'nihss-button selected') {
                result.innerHTML = initial += 3;
            }
            setTimeout(() => {
                nihssTwo.classList.remove('hide');
                nihssOne.classList.add('hide');
            }, 600);
        }
    })
    nihssTwo.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[4].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[5].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[6].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            }
            setTimeout(() => {
                nihssThree.classList.remove('hide');
                nihssTwo.classList.add('hide');
            }, 600);
        }
    })
    nihssThree.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[7].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[8].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[9].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            }
            setTimeout(() => {
                nihssFour.classList.remove('hide');
                nihssThree.classList.add('hide');
            }, 600);
        }
    })
    nihssFour.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[10].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[11].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[12].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            }
            setTimeout(() => {
                nihssFive.classList.remove('hide');
                nihssFour.classList.add('hide');
            }, 600);
        }
    })
    nihssFive.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[13].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[14].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[15].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            } else if (nihssBtn[16].className === 'nihss-button selected') {
                result.innerHTML = initial += 3;
            }
            setTimeout(() => {
                nihssSix.classList.remove('hide');
                nihssFive.classList.add('hide');
            }, 600);
        }
    })
    nihssSix.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[17].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[18].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[19].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            } else if (nihssBtn[20].className === 'nihss-button selected') {
                result.innerHTML = initial += 3;
            }
            setTimeout(() => {
                nihssSeven.classList.remove('hide');
                nihssSix.classList.add('hide');
            }, 600);
        }
    })
    nihssSeven.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[21].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[22].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[23].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            } else if (nihssBtn[24].className === 'nihss-button selected') {
                result.innerHTML = initial += 3;
            } else if (nihssBtn[25].className === 'nihss-button selected') {
                result.innerHTML = initial += 4;
            }
            setTimeout(() => {
                nihssEight.classList.remove('hide');
                nihssSeven.classList.add('hide');
            }, 600);
        }
    })
    nihssEight.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[26].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[27].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[28].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            } else if (nihssBtn[29].className === 'nihss-button selected') {
                result.innerHTML = initial += 3;
            } else if (nihssBtn[30].className === 'nihss-button selected') {
                result.innerHTML = initial += 4;
            }
            setTimeout(() => {
                nihssNine.classList.remove('hide');
                nihssEight.classList.add('hide');
            }, 600);
        }
    })
    nihssNine.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[31].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[32].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[33].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            } else if (nihssBtn[34].className === 'nihss-button selected') {
                result.innerHTML = initial += 3;
            } else if (nihssBtn[35].className === 'nihss-button selected') {
                result.innerHTML = initial += 4;
            }
            setTimeout(() => {
                nihssTen.classList.remove('hide');
                nihssNine.classList.add('hide');
            }, 600);
        }
    })
    nihssTen.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[36].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[37].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[38].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            } else if (nihssBtn[39].className === 'nihss-button selected') {
                result.innerHTML = initial += 3;
            } else if (nihssBtn[40].className === 'nihss-button selected') {
                result.innerHTML = initial += 4;
            }
            setTimeout(() => {
                nihssEleven.classList.remove('hide');
                nihssTen.classList.add('hide');
            }, 600);
        }
    })
    nihssEleven.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[41].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[42].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[43].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            }
            setTimeout(() => {
                nihssTwelve.classList.remove('hide');
                nihssEleven.classList.add('hide');
            }, 600);
        }
    })
    nihssTwelve.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[44].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[45].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[46].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            }
            setTimeout(() => {
                nihssThirteen.classList.remove('hide');
                nihssTwelve.classList.add('hide');
            }, 600);
        }
    })
    nihssThirteen.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[47].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[48].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[49].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            } else if (nihssBtn[50].className === 'nihss-button selected') {
                result.innerHTML = initial += 3;
            }
            setTimeout(() => {
                nihssFourteen.classList.remove('hide');
                nihssThirteen.classList.add('hide');
            }, 600);
        }
    })
    nihssFourteen.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[51].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[52].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[53].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            }
            setTimeout(() => {
                nihssFifteen.classList.remove('hide');
                nihssFourteen.classList.add('hide');
            }, 600);
        }
    })
    nihssFifteen.addEventListener('click', (e) => {
        if (e.target && e.target.className === 'nihss-button') {
            e.target.classList.toggle('selected');
            if (nihssBtn[54].className === 'nihss-button selected') {
                result.innerHTML = initial += 0;
            } else if (nihssBtn[55].className === 'nihss-button selected') {
                result.innerHTML = initial += 1;
            } else if (nihssBtn[56].className === 'nihss-button selected') {
                result.innerHTML = initial += 2;
            }
            setTimeout(() => {
                //finalResult.classList.remove('hide');
                nihssFifteen.classList.add('hide');
            }, 600);
        }
    })
}