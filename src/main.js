const populationIndicators = document.getElementsByClassName('population-indicators');
const laborIndicators = document.getElementsByClassName('labor-indicators');
const unemploymentIndicators = document.getElementsByClassName('unemployment-indicators');
const educationIndicators = document.getElementsByClassName('education-indicators');
const violenceIndicators = document.getElementsByClassName('violence-indicators');
const indicatorsPeruArray = WORLDBANK.PER.indicators;
const indicatorsBrazilArray = WORLDBANK.BRA.indicators;
const indicatorsChileArray = WORLDBANK.CHL.indicators;
const indicatorsMexicoArray = WORLDBANK.MEX.indicators;


// funcion que me muesta en un array de arrays los values de data
let acum = [];
const dataOfData = arr => {
  const arrData = arr.map(val => val.data);
  const valuesOfData = arrData.map(val => Object.values(val));
  acum.push(valuesOfData);
  return acum;
};

// filtrado de indicadores por codigo PARA PERU
const populationData = (people) => {
  return `
  <ul class="population-list"> ${people.map(pop => `
    <li>${pop.join(' - ')}</li>`).join('')}
  </ul>
  `;
};
let populationStringPer = '';
worldbank.populationFilter(indicatorsPeruArray, 'SP.POP').forEach(pop => {
  const populationListPer = `
    <div class="indicator-name"> ${pop.indicatorName}</div>
    <section class="listado-data">
      <h5>Año  -  Datos</h5>
      ${populationData(Object.entries(pop.data))}
      <p class ="average-value"> El promedio es: ${(worldbank.calculateAverage(...dataOfData(worldbank.populationFilter(indicatorsPeruArray, 'SP.POP'))))}</p>
    </section>
    `;
  populationStringPer += populationListPer;
  populationIndicators[0].innerHTML = populationStringPer;
});

//https://www.youtube.com/watch?annotation_id=annotation_4085373927&feature=iv&src_vid=WT2YwgeUuDU&v=F-KCncXMPk0https://www.youtube.com/watch?annotation_id=annotation_4085373927&feature=iv&src_vid=WT2YwgeUuDU&v=F-KCncXMPk0

/* <button class="show-btn">Ver</button>
    <button class="hide-btn">Ocultar</button>

const showBtn = document.getElementsByClassName('show-btn');
const hideBtn = document.getElementsByClassName('hide-btn');

for (let i = 0; i < showBtn.length; i++) {
  for (let j = 0; j < hideBtn.length; j++) {
    showBtn[i].addEventListener('click', () => {
      showBtn[i].style.display = 'none';
      hideBtn[j].style.display = 'block';  
    });
    hideBtn[j].addEventListener('click', () => {
      showBtn[i].style.display = 'block'; 
      hideBtn[j].style.display = 'none';
    // document.getElementsByClassName('listado-data').style.display = 'block'; 
    });
  }
} */


const laborData = work => {
  return `
    <ul> ${work.map(lab => `
      <li>${lab.join(' - ')}</li>`).join('')}
    </ul>
  `;
};
let laborStringPer = '';
worldbank.laborFilter(indicatorsPeruArray, 'SL.TLF').forEach(lab => {
  const laborListPer = `
  <div class="indicator-name"> ${lab.indicatorName} </div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${laborData(Object.entries(lab.data))}
  </section>
  `;
  laborStringPer += laborListPer;
  laborIndicators[0].innerHTML = laborStringPer;
});
// const <p>${worldbank.calculateAverage(Object.values(lab.data))}</p>
const unemploymentData = unemploy => {
  return `
    <ul> ${unemploy.map(unemployed => `
      <li>${unemployed.join(' - ')}</li>`).join('')}
    </ul>
  `;
};
let unemploymentStringPer = '';
worldbank.unemploymentFilter(indicatorsPeruArray, 'SL.UEM').forEach(unemployed => {
  const unemploymentListPer = `
  <div class="indicator-name"> ${unemployed.indicatorName}</div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${unemploymentData(Object.entries(unemployed.data))}
   </section>
  `;
  unemploymentStringPer += unemploymentListPer;
  unemploymentIndicators[0].innerHTML = unemploymentStringPer;
});
const educationData = educa => {
  return `
    <ul> ${educa.map(edu => `
      <li>${edu.join(' - ')}</li>`).join('')}
    </ul>
  `;
};
let educationStringPer = '';
worldbank.educationFilter(indicatorsPeruArray, 'SE').forEach(edu => {
  const educationListPer = `
  <div class="indicator-name"> ${edu.indicatorName}</div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${educationData(Object.entries(edu.data))}
  </section>
  `;
  educationStringPer += educationListPer;
  educationIndicators[0].innerHTML = educationStringPer;
}); 
const violenceData = assault => {
  return `
    <ul> ${assault.map(violent => `
      <li>${violent.join(' - ')}</li>`).join('')}
    </ul>
  `;
};
let violenceStringPer = '';
worldbank.violenceFilter(indicatorsPeruArray, 'SG.VAW').forEach(violent => {
  const violenceListPer = `
  <div class="indicator-name"> ${violent.indicatorName} </div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${violenceData(Object.entries(violent.data))}
  </section>
  `;
  violenceStringPer += violenceListPer;
  violenceIndicators[0].innerHTML = violenceStringPer;
});

let populationStringBra = '';
worldbank.populationFilter(indicatorsBrazilArray, 'SP.POP').forEach(pop => {
  const populationListBra = `
    <div class="indicator-name"> ${pop.indicatorName}</div>
    <section class="listado-data">
      <h5>Año  -  Datos</h5>
      ${populationData(Object.entries(pop.data))}
    </section>
    `;
  populationStringBra += populationListBra;
  populationIndicators[1].innerHTML = populationStringBra;
});
let laborStringBra = '';
worldbank.laborFilter(indicatorsBrazilArray, 'SL.TLF').forEach(lab => {
  const laborListBra = `
  <div class="indicator-name"> ${lab.indicatorName} </div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${laborData(Object.entries(lab.data))}
  </section>
  `;
  laborStringBra += laborListBra;
  laborIndicators[1].innerHTML = laborStringBra;
});
let unemploymentStringBra = '';
worldbank.unemploymentFilter(indicatorsBrazilArray, 'SL.UEM').forEach(unemployed => {
  const unemploymentListBra = `
  <div class="indicator-name"> ${unemployed.indicatorName}</div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${unemploymentData(Object.entries(unemployed.data))}
  </section>
  `;
  unemploymentStringBra += unemploymentListBra;
  unemploymentIndicators[1].innerHTML = unemploymentStringBra;
});
let educationStringBra = '';
worldbank.educationFilter(indicatorsBrazilArray, 'SE').forEach(edu => {
  const educationListBra = `
  <div class="indicator-name"> ${edu.indicatorName}</div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${educationData(Object.entries(edu.data))}
  </section>
  `;
  educationStringBra += educationListBra;
  educationIndicators[1].innerHTML = educationStringBra;
}); 
let violenceStringBra = '';
worldbank.violenceFilter(indicatorsBrazilArray, 'SG.VAW').forEach(violent => {
  const violenceListBra = `
  <div class="indicator-name"> ${violent.indicatorName} </div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${violenceData(Object.entries(violent.data))}
  </section>
  `;
  violenceStringBra += violenceListBra;
  violenceIndicators[1].innerHTML = violenceStringBra;
});

// chile
let populationStringChl = '';
worldbank.populationFilter(indicatorsChileArray, 'SP.POP').forEach(pop => {
  const populationListChl = `
    <div class="indicator-name"> ${pop.indicatorName}</div>
    <section class="listado-data">
      <h5>Año  -  Datos</h5>
      ${populationData(Object.entries(pop.data))}
    </section>
    `;
  populationStringChl += populationListChl;
  populationIndicators[2].innerHTML = populationStringChl;
});
let laborStringChl = '';
worldbank.laborFilter(indicatorsChileArray, 'SL.TLF').forEach(lab => {
  const laborListChl = `
  <div class="indicator-name"> ${lab.indicatorName} </div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${laborData(Object.entries(lab.data))}
  </section>
  `;
  laborStringChl += laborListChl;
  laborIndicators[2].innerHTML = laborStringChl;
});
let unemploymentStringChl = '';
worldbank.unemploymentFilter(indicatorsChileArray, 'SL.UEM').forEach(unemployed => {
  const unemploymentListChl = `
  <div class="indicator-name"> ${unemployed.indicatorName}</div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${unemploymentData(Object.entries(unemployed.data))}
  </section>
  `;
  unemploymentStringChl += unemploymentListChl;
  unemploymentIndicators[2].innerHTML = unemploymentStringChl;
});
let educationStringChl = '';
worldbank.educationFilter(indicatorsChileArray, 'SE').forEach(edu => {
  const educationListChl = `
  <div class="indicator-name"> ${edu.indicatorName}</div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${educationData(Object.entries(edu.data))}
  </section>
  `;
  educationStringChl += educationListChl;
  educationIndicators[2].innerHTML = educationStringChl;
}); 
let violenceStringChl = '';
worldbank.violenceFilter(indicatorsChileArray, 'SG.VAW').forEach(violent => {
  const violenceListChl = `
  <div class="indicator-name"> ${violent.indicatorName} </div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${violenceData(Object.entries(violent.data))}
  </section>
  `;
  violenceStringChl += violenceListChl;
  violenceIndicators[2].innerHTML = violenceStringChl;
});
// mexico 
let populationStringMex = '';
worldbank.populationFilter(indicatorsMexicoArray, 'SP.POP').forEach(pop => {
  const populationListMex = `
    <div class="indicator-name"> ${pop.indicatorName}</div>
    <section class="listado-data">
      <h5>Año  -  Datos</h5>
      ${populationData(Object.entries(pop.data))}
    </section>
    `;
  populationStringMex += populationListMex;
  populationIndicators[3].innerHTML = populationStringMex;
});
let laborStringMex = '';
worldbank.laborFilter(indicatorsMexicoArray, 'SL.TLF').forEach(lab => {
  const laborListMex = `
  <div class="indicator-name"> ${lab.indicatorName} </div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${laborData(Object.entries(lab.data))}
  </section>
  `;
  laborStringMex += laborListMex;
  laborIndicators[3].innerHTML = laborStringMex;
});
let unemploymentStringMex = '';
worldbank.unemploymentFilter(indicatorsMexicoArray, 'SL.UEM').forEach(unemployed => {
  const unemploymentListMex = `
  <div class="indicator-name"> ${unemployed.indicatorName}</div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${unemploymentData(Object.entries(unemployed.data))}
  </section>
  `;
  unemploymentStringMex += unemploymentListMex;
  unemploymentIndicators[3].innerHTML = unemploymentStringMex;
});
let educationStringMex = '';
worldbank.educationFilter(indicatorsMexicoArray, 'SE').forEach(edu => {
  const educationListMex = `
  <div class="indicator-name"> ${edu.indicatorName}</div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${educationData(Object.entries(edu.data))}
  </section>
  `;
  educationStringMex += educationListMex;
  educationIndicators[3].innerHTML = educationStringMex;
}); 
let violenceStringMex = '';
worldbank.violenceFilter(indicatorsMexicoArray, 'SG.VAW').forEach(violent => {
  const violenceListMex = `
  <div class="indicator-name"> ${violent.indicatorName} </div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${violenceData(Object.entries(violent.data))}
  </section>
  `;
  violenceStringMex += violenceListMex;
  violenceIndicators[3].innerHTML = violenceStringMex;
});

// filtrado por sexo 
const womenData = (girl) => {
  return `
  <ul class="women-list"> ${girl.map(woman => `
    <li>${woman.join(' - ')}</li>`).join('')}
  </ul>
  `;
};
// Mujeres Peru
let womenStringPe = '';
worldbank.womenFilter(indicatorsPeruArray).forEach(woman => {
  const womenList = `
  <div class="indicator-name"> ${woman.indicatorName}</div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${womenData(Object.entries(woman.data))} 
  </section>
  `;
  womenStringPe += womenList;
  document.getElementById('women-indicators-pe').innerHTML = womenStringPe;
});
// Mujeres Brasil
let womenStringBr = '';
worldbank.womenFilter(indicatorsBrazilArray).forEach(woman => {
  const womenList = `
  <div class="indicator-name"> ${woman.indicatorName}</div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${womenData(Object.entries(woman.data))}
  </section> 
  `;
  womenStringBr += womenList;
  document.getElementById('women-indicators-br').innerHTML = womenStringBr;
});
// Mujer Chile 
let womenStringCh = '';
worldbank.womenFilter(indicatorsChileArray).forEach(woman => {
  const womenList = `
  <div class="indicator-name"> ${woman.indicatorName}</div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${womenData(Object.entries(woman.data))} 
  </section>
  `;
  womenStringCh += womenList;
  document.getElementById('women-indicators-ch').innerHTML = womenStringCh;
});
// Mujeres Mexico
let womenStringMe = '';
worldbank.womenFilter(indicatorsMexicoArray).forEach(woman => {
  const womenList = `
  <div class="indicator-name"> ${woman.indicatorName}</div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${womenData(Object.entries(woman.data))} 
  </section>
  `;
  womenStringMe += womenList;
  document.getElementById('women-indicators-me').innerHTML = womenStringMe;
});

// Mostrar indicadores mujeres en html con select
const countrySelectWomen = document.getElementById('country-select-women');

const womenShowIndicator = () => {
  if (countrySelectWomen.selectedIndex === 0) {
    document.getElementById('select1').style.display = 'block';
    document.getElementById('women-indicators-pe').style.display = 'block';
    document.getElementById('women-indicators-br').style.display = 'none';
    document.getElementById('women-indicators-ch').style.display = 'none';
    document.getElementById('women-indicators-me').style.display = 'none';
  } else if (countrySelectWomen.selectedIndex === 1) {
    document.getElementById('select1').style.display = 'block';
    document.getElementById('women-indicators-pe').style.display = 'none';
    document.getElementById('women-indicators-br').style.display = 'block';
    document.getElementById('women-indicators-ch').style.display = 'none';
    document.getElementById('women-indicators-me').style.display = 'none';
  } else if (countrySelectWomen.selectedIndex === 2) {
    document.getElementById('select1').style.display = 'block';
    document.getElementById('women-indicators-pe').style.display = 'none';
    document.getElementById('women-indicators-br').style.display = 'none';
    document.getElementById('women-indicators-ch').style.display = 'block';
    document.getElementById('women-indicators-me').style.display = 'none';
  } else {
    document.getElementById('select1').style.display = 'block';
    document.getElementById('women-indicators-pe').style.display = 'none';
    document.getElementById('women-indicators-br').style.display = 'none';
    document.getElementById('women-indicators-ch').style.display = 'none';
    document.getElementById('women-indicators-me').style.display = 'block';
  }
};
countrySelectWomen.addEventListener('click', womenShowIndicator);

const menData = (guy) => {
  return `
  <ul class="women-list"> ${guy.map(man => `
    <li>${man.join(' - ')}</li>`).join('')}
  </ul>
  `;
};
// Hombres Perú
let menStringPe = '';
worldbank.menFilter(indicatorsPeruArray).forEach(man => {
  const menList = `
  <div class="indicator-name"> ${man.indicatorName} </div>
  <section class="listado-data">
    <h5>Año  -  Datos</h5>
    ${menData(Object.entries(man.data))}
  </section>
  `;
  menStringPe += menList;
  document.getElementById('men-indicators-pe').innerHTML = menStringPe;
});
// Hombres Brasil
let menStringBr = '';
worldbank.menFilter(indicatorsBrazilArray).forEach(man => {
  const menList = `
  <div> ${man.indicatorName} </div>
  <h5>Año  -  Datos</h5>
  ${menData(Object.entries(man.data))} 
  `;
  menStringBr += menList;
  document.getElementById('men-indicators-br').innerHTML = menStringBr;
});
// Hombres Chile
let menStringCh = '';
worldbank.menFilter(indicatorsChileArray).forEach(man => {
  const menList = `
  <div> ${man.indicatorName} </div>
  <h5>Año  -  Datos</h5>
  ${menData(Object.entries(man.data))} 
  `;
  menStringCh += menList;
  document.getElementById('men-indicators-ch').innerHTML = menStringCh;
});
// Hombres México
let menStringMe = '';
worldbank.menFilter(indicatorsMexicoArray).forEach(man => {
  const menList = `
  <div> ${man.indicatorName} </div>
  <h5>Año  -  Datos</h5>
  ${menData(Object.entries(man.data))} 
  `;
  menStringMe += menList;
  document.getElementById('men-indicators-me').innerHTML = menStringMe;
});
// Mostrar indicadores hombres en html con select
const countrySelectMen = document.getElementById('country-select-men');

const menShowIndicator = () => {
  if (countrySelectMen.selectedIndex === 0) {
    document.getElementById('select2').style.display = 'block';
    document.getElementById('men-indicators-pe').style.display = 'block';
    document.getElementById('men-indicators-br').style.display = 'none';
    document.getElementById('men-indicators-ch').style.display = 'none';
    document.getElementById('men-indicators-me').style.display = 'none';
  } else if (countrySelectMen.selectedIndex === 1) {
    document.getElementById('select2').style.display = 'block';
    document.getElementById('men-indicators-pe').style.display = 'none';
    document.getElementById('men-indicators-br').style.display = 'block';
    document.getElementById('men-indicators-ch').style.display = 'none';
    document.getElementById('men-indicators-me').style.display = 'none';
  } else if (countrySelectMen.selectedIndex === 2) {
    document.getElementById('select2').style.display = 'block';
    document.getElementById('men-indicators-pe').style.display = 'none';
    document.getElementById('men-indicators-br').style.display = 'none';
    document.getElementById('men-indicators-ch').style.display = 'block';
    document.getElementById('men-indicators-me').style.display = 'none';
  } else {
    document.getElementById('select2').style.display = 'block';
    document.getElementById('men-indicators-pe').style.display = 'none';
    document.getElementById('men-indicators-br').style.display = 'none';
    document.getElementById('men-indicators-ch').style.display = 'none';
    document.getElementById('men-indicators-me').style.display = 'block';
  }
};
countrySelectMen.addEventListener('click', menShowIndicator);

// sort 
let sortString = '';
worldbank.orderIndicator(indicatorsPeruArray).forEach(order => {
  const orderList = `<div>${order.indicatorName} </div>`;
  sortString += orderList;
  document.getElementById('upward-order').innerHTML = sortString;
});
let fallingString = '';
worldbank.fallingIndicator(indicatorsPeruArray).forEach(falling => {
  const fallingList = `<div>${falling.indicatorName} </div>`;
  fallingString += fallingList;
  document.getElementById('falling-order').innerHTML = fallingString;
});

document.getElementById('peru-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'block';
  document.getElementById('brazil-page').style.display = 'none'; 
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('sort-page').style.display = 'none';
  document.getElementById('women-indicators-pe').style.display = 'none';
  document.getElementById('women-indicators-br').style.display = 'none';
  document.getElementById('women-indicators-ch').style.display = 'none';
  document.getElementById('women-indicators-me').style.display = 'none';
});
document.getElementById('brazil-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none'; 
  document.getElementById('brazil-page').style.display = 'block';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('sort-page').style.display = 'none';
  document.getElementById('women-indicators-pe').style.display = 'none';
  document.getElementById('women-indicators-br').style.display = 'none';
  document.getElementById('women-indicators-ch').style.display = 'none';
  document.getElementById('women-indicators-me').style.display = 'none';
});
document.getElementById('chile-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'block';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none'; 
  document.getElementById('sort-page').style.display = 'none';
  document.getElementById('women-indicators-pe').style.display = 'none';
  document.getElementById('women-indicators-br').style.display = 'none';
  document.getElementById('women-indicators-ch').style.display = 'none';
  document.getElementById('women-indicators-me').style.display = 'none';
});
document.getElementById('mexico-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'block';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('sort-page').style.display = 'none';
  document.getElementById('women-indicators-pe').style.display = 'none';
  document.getElementById('women-indicators-br').style.display = 'none';
  document.getElementById('women-indicators-ch').style.display = 'none';
  document.getElementById('women-indicators-me').style.display = 'none';
});
// peru
document.getElementsByClassName('population-option')[0].addEventListener('click', () => {
  populationIndicators[0].style.display = 'block';
  laborIndicators[0].style.display = 'none';
  unemploymentIndicators[0].style.display = 'none';
  educationIndicators[0].style.display = 'none';
  violenceIndicators[0].style.display = 'none';
});
document.getElementsByClassName('labor-option')[0].addEventListener('click', () => {
  populationIndicators[0].style.display = 'none';
  laborIndicators[0].style.display = 'block';
  unemploymentIndicators[0].style.display = 'none';
  educationIndicators[0].style.display = 'none';
  violenceIndicators[0].style.display = 'none';
});
document.getElementsByClassName('unemployment-option')[0].addEventListener('click', () => {
  populationIndicators[0].style.display = 'none';
  laborIndicators[0].style.display = 'none';
  unemploymentIndicators[0].style.display = 'block';
  educationIndicators[0].style.display = 'none';
  violenceIndicators[0].style.display = 'none';
});
document.getElementsByClassName('education-option')[0].addEventListener('click', () => {
  populationIndicators[0].style.display = 'none';
  laborIndicators[0].style.display = 'none';
  unemploymentIndicators[0].style.display = 'none';
  educationIndicators[0].style.display = 'block';
  violenceIndicators[0].style.display = 'none';
});
document.getElementsByClassName('violence-option')[0].addEventListener('click', () => {
  populationIndicators[0].style.display = 'none';
  laborIndicators[0].style.display = 'none';
  unemploymentIndicators[0].style.display = 'none';
  educationIndicators[0].style.display = 'none';
  violenceIndicators[0].style.display = 'block';
});

// brazil 
document.getElementsByClassName('population-option')[1].addEventListener('click', () => {
  populationIndicators[1].style.display = 'block';
  laborIndicators[1].style.display = 'none';
  unemploymentIndicators[1].style.display = 'none';
  educationIndicators[1].style.display = 'none';
  violenceIndicators[1].style.display = 'none';
});
document.getElementsByClassName('labor-option')[1].addEventListener('click', () => {
  populationIndicators[1].style.display = 'none';
  laborIndicators[1].style.display = 'block';
  unemploymentIndicators[1].style.display = 'none';
  educationIndicators[1].style.display = 'none';
  violenceIndicators[1].style.display = 'none';
});
document.getElementsByClassName('unemployment-option')[1].addEventListener('click', () => {
  populationIndicators[1].style.display = 'none';
  laborIndicators[1].style.display = 'none';
  unemploymentIndicators[1].style.display = 'block';
  educationIndicators[1].style.display = 'none';
  violenceIndicators[1].style.display = 'none';
});
document.getElementsByClassName('education-option')[1].addEventListener('click', () => {
  populationIndicators[1].style.display = 'none';
  laborIndicators[1].style.display = 'none';
  unemploymentIndicators[1].style.display = 'none';
  educationIndicators[1].style.display = 'block';
  violenceIndicators[1].style.display = 'none';
});
document.getElementsByClassName('violence-option')[1].addEventListener('click', () => {
  populationIndicators[1].style.display = 'none';
  laborIndicators[1].style.display = 'none';
  unemploymentIndicators[1].style.display = 'none';
  educationIndicators[1].style.display = 'none';
  violenceIndicators[1].style.display = 'block';
});
// chile 
document.getElementsByClassName('population-option')[2].addEventListener('click', () => {
  populationIndicators[2].style.display = 'block';
  laborIndicators[2].style.display = 'none';
  unemploymentIndicators[2].style.display = 'none';
  educationIndicators[2].style.display = 'none';
  violenceIndicators[2].style.display = 'none';
});
document.getElementsByClassName('labor-option')[2].addEventListener('click', () => {
  populationIndicators[2].style.display = 'none';
  laborIndicators[2].style.display = 'block';
  unemploymentIndicators[2].style.display = 'none';
  educationIndicators[2].style.display = 'none';
  violenceIndicators[2].style.display = 'none';
});
document.getElementsByClassName('unemployment-option')[2].addEventListener('click', () => {
  populationIndicators[2].style.display = 'none';
  laborIndicators[2].style.display = 'none';
  unemploymentIndicators[2].style.display = 'block';
  educationIndicators[2].style.display = 'none';
  violenceIndicators[2].style.display = 'none';
});
document.getElementsByClassName('education-option')[2].addEventListener('click', () => {
  populationIndicators[2].style.display = 'none';
  laborIndicators[2].style.display = 'none';
  unemploymentIndicators[2].style.display = 'none';
  educationIndicators[2].style.display = 'block';
  violenceIndicators[2].style.display = 'none';
});
document.getElementsByClassName('violence-option')[2].addEventListener('click', () => {
  populationIndicators[2].style.display = 'none';
  laborIndicators[2].style.display = 'none';
  unemploymentIndicators[2].style.display = 'none';
  educationIndicators[2].style.display = 'none';
  violenceIndicators[2].style.display = 'block';
});
// mexico
document.getElementsByClassName('population-option')[3].addEventListener('click', () => {
  populationIndicators[3].style.display = 'block';
  laborIndicators[3].style.display = 'none';
  unemploymentIndicators[3].style.display = 'none';
  educationIndicators[3].style.display = 'none';
  violenceIndicators[3].style.display = 'none';
});
document.getElementsByClassName('labor-option')[3].addEventListener('click', () => {
  populationIndicators[3].style.display = 'none';
  laborIndicators[3].style.display = 'block';
  unemploymentIndicators[3].style.display = 'none';
  educationIndicators[3].style.display = 'none';
  violenceIndicators[3].style.display = 'none';
});
document.getElementsByClassName('unemployment-option')[3].addEventListener('click', () => {
  populationIndicators[3].style.display = 'none';
  laborIndicators[3].style.display = 'none';
  unemploymentIndicators[3].style.display = 'block';
  educationIndicators[3].style.display = 'none';
  violenceIndicators[3].style.display = 'none';
});
document.getElementsByClassName('education-option')[3].addEventListener('click', () => {
  populationIndicators[3].style.display = 'none';
  laborIndicators[3].style.display = 'none';
  unemploymentIndicators[3].style.display = 'none';
  educationIndicators[3].style.display = 'block';
  violenceIndicators[3].style.display = 'none';
});
document.getElementsByClassName('violence-option')[3].addEventListener('click', () => {
  populationIndicators[3].style.display = 'none';
  laborIndicators[3].style.display = 'none';
  unemploymentIndicators[3].style.display = 'none';
  educationIndicators[3].style.display = 'none';
  violenceIndicators[3].style.display = 'block';
});

document.getElementById('women-option').addEventListener('click', () => {
  document.getElementById('women-page').style.display = 'block';
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('sort-page').style.display = 'none';
  document.getElementById('women-indicators-pe').style.display = 'none';
  document.getElementById('women-indicators-br').style.display = 'none';
  document.getElementById('women-indicators-ch').style.display = 'none';
  document.getElementById('women-indicators-me').style.display = 'none';
});
document.getElementById('men-option').addEventListener('click', () => {
  document.getElementById('men-page').style.display = 'block';
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('sort-page').style.display = 'none';
  document.getElementById('men-indicators-pe').style.display = 'none';
  document.getElementById('men-indicators-br').style.display = 'none';
  document.getElementById('men-indicators-ch').style.display = 'none';
  document.getElementById('men-indicators-me').style.display = 'none';
});
document.getElementById('order-option').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('sort-page').style.display = 'block';
});
document.getElementById('btn-asc').addEventListener('click', () => {
  document.getElementById('upward-order').style.display = 'block';
  document.getElementById('falling-order').style.display = 'none'; 
});
document.getElementById('btn-desc').addEventListener('click', () => {
  document.getElementById('falling-order').style.display = 'block'; 
  document.getElementById('upward-order').style.display = 'none';
});

