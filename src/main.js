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

const dataList = (list) => {
  return `
  <h5><strong>Año -  Datos</strong></h5>
  <ul class="data-list"> ${list.map(value => `
    <li>${value.join(' - ')}</li>`).join('')}
  </ul>
  `;
};
const populationInfo = (pop, index, country) => {
  const averagePopulationArray = worldbank.calculateAverage(...worldbank.dataOfData(worldbank.filter(country, 'SP.POP')));
  return `
  <div class="indicator-name"> ${pop.indicatorName}
    <div class="buttons">
      <button class="show-btn" id ="show-btn-${pop.countryCode}-${pop.indicatorCode}" data-code="${pop.countryCode}-${pop.indicatorCode}">Ver datos</button>
      <button class="hide-btn" id ="hide-btn-${pop.countryCode}-${pop.indicatorCode}" data-code="${pop.countryCode}-${pop.indicatorCode}">Ocultar</button>
    </div>
  </div>
  <section class="listado-data" id="listas-${pop.countryCode}-${pop.indicatorCode}" data-code="${pop.countryCode}-${pop.indicatorCode}">
    ${dataList(Object.entries(pop.data))}
    <p class ="average-value"> Promedio: ${averagePopulationArray[index]}</p>
  </section>
  `; 
};
// map will run the function populationInfo once for each item in the original array and each time the function runs whatever it returns gets added to the new array
populationIndicators[0].innerHTML = `${worldbank.filter(indicatorsPeruArray, 'SP.POP').map(populationInfo).join('')}`;
populationIndicators[1].innerHTML = `${worldbank.filter(indicatorsBrazilArray, 'SP.POP').map(populationInfo).join('')}`;
populationIndicators[2].innerHTML = `${worldbank.filter(indicatorsChileArray, 'SP.POP').map(populationInfo).join('')}`;
populationIndicators[3].innerHTML = `${worldbank.filter(indicatorsMexicoArray, 'SP.POP').map(populationInfo).join('')}`;

const laborInfo = (lab, index, country) => {
  const averageLaborArray = worldbank.calculateAverage(...worldbank.dataOfData(worldbank.filter(country, 'SL.TLF')));
  return `
  <div class="indicator-name"> ${lab.indicatorName} 
  <div class="buttons">
      <button class="show-btn" id ="show-btn-${lab.countryCode}-${lab.indicatorCode}" data-code="${lab.countryCode}-${lab.indicatorCode}">Ver datos</button>
      <button class="hide-btn" id ="hide-btn-${lab.countryCode}-${lab.indicatorCode}" data-code="${lab.countryCode}-${lab.indicatorCode}">Ocultar</button>
    </div>
  </div>
  <section class="listado-data" id="listas-${lab.countryCode}-${lab.indicatorCode}" data-code="${lab.countryCode}-${lab.indicatorCode}">
    ${dataList(Object.entries(lab.data))}
    <p class ="average-value"> Promedio: ${averageLaborArray[index]}</p>
  </section>
  `;
};
laborIndicators[0].innerHTML = `${worldbank.filter(indicatorsPeruArray, 'SL.TLF').map(laborInfo).join('')}`;
laborIndicators[1].innerHTML = `${worldbank.filter(indicatorsBrazilArray, 'SL.TLF').map(laborInfo).join('')}`;
laborIndicators[2].innerHTML = `${worldbank.filter(indicatorsChileArray, 'SL.TLF').map(laborInfo).join('')}`;
laborIndicators[3].innerHTML = `${worldbank.filter(indicatorsMexicoArray, 'SL.TLF').map(laborInfo).join('')}`;

// const <p>${worldbank.calculateAverage(Object.values(lab.data))}</p>
const unemploymentInfo = (unemployed, index, country) => {
  const averageUnemploymentArray = worldbank.calculateAverage(...worldbank.dataOfData(worldbank.filter(country, 'SL.UEM')));
  return `
  <div class="indicator-name"> ${unemployed.indicatorName}
    <div class="buttons">
      <button class="show-btn" id ="show-btn-${unemployed.countryCode}-${unemployed.indicatorCode}" data-code="${unemployed.countryCode}-${unemployed.indicatorCode}">Ver datos</button>
      <button class="hide-btn" id ="hide-btn-${unemployed.countryCode}-${unemployed.indicatorCode}" data-code="${unemployed.countryCode}-${unemployed.indicatorCode}">Ocultar</button>
    </div>
  </div>
  <section class="listado-data" id="listas-${unemployed.countryCode}-${unemployed.indicatorCode}" data-code="${unemployed.countryCode}-${unemployed.indicatorCode}">
    ${dataList(Object.entries(unemployed.data))} 
    <p class="average-value"> Promedio: ${averageUnemploymentArray[index]}<p/>
   </section>
  `;
};
unemploymentIndicators[0].innerHTML = `${worldbank.filter(indicatorsPeruArray, 'SL.UEM').map(unemploymentInfo).join('')}`;
unemploymentIndicators[1].innerHTML = `${worldbank.filter(indicatorsBrazilArray, 'SL.UEM').map(unemploymentInfo).join('')}`;
unemploymentIndicators[2].innerHTML = `${worldbank.filter(indicatorsChileArray, 'SL.UEM').map(unemploymentInfo).join('')}`;
unemploymentIndicators[3].innerHTML = `${worldbank.filter(indicatorsMexicoArray, 'SL.UEM').map(unemploymentInfo).join('')}`;

const educationInfo = (edu, index, country) => {
  const averageEducationArray = worldbank.calculateAverage(...worldbank.dataOfData(worldbank.educationFilter(country, 'SE')));
  return `
  <div class="indicator-name"> ${edu.indicatorName}
    <div class="buttons">
      <button class="show-btn" id ="show-btn-${edu.countryCode}-${edu.indicatorCode}" data-code="${edu.countryCode}-${edu.indicatorCode}">Ver datos</button>
      <button class="hide-btn" id ="hide-btn-${edu.countryCode}-${edu.indicatorCode}" data-code="${edu.countryCode}-${edu.indicatorCode}">Ocultar</button>
    </div>
  </div>
  <section class="listado-data" id="listas-${edu.countryCode}-${edu.indicatorCode}" data-code="${edu.countryCode}-${edu.indicatorCode}">
    ${dataList(Object.entries(edu.data))}
    <p class="average-value"> Promedio: ${averageEducationArray[index]}<p/>
   </section>
  `;
};
educationIndicators[0].innerHTML = `${worldbank.educationFilter(indicatorsPeruArray, 'SE').map(educationInfo).join('')}`;
educationIndicators[1].innerHTML = `${worldbank.educationFilter(indicatorsBrazilArray, 'SE').map(educationInfo).join('')}`;
educationIndicators[2].innerHTML = `${worldbank.educationFilter(indicatorsChileArray, 'SE').map(educationInfo).join('')}`;
educationIndicators[3].innerHTML = `${worldbank.educationFilter(indicatorsMexicoArray, 'SE').map(educationInfo).join('')}`;

const violenceInfo = (violent, index, country) => {
  const averageViolenceArray = worldbank.calculateAverage(...worldbank.dataOfData(worldbank.filter(country, 'SG.VAW')));
  return `
  <div class="indicator-name"> ${violent.indicatorName} 
    <div class="buttons">
      <button class="show-btn" id ="show-btn-${violent.countryCode}-${violent.indicatorCode}" data-code="${violent.countryCode}-${violent.indicatorCode}">Ver datos</button>
      <button class="hide-btn" id ="hide-btn-${violent.countryCode}-${violent.indicatorCode}" data-code="${violent.countryCode}-${violent.indicatorCode}">Ocultar</button>
    </div>
  </div>
  <section class="listado-data" id="listas-${violent.countryCode}-${violent.indicatorCode}" data-code="${violent.countryCode}-${violent.indicatorCode}">
    ${dataList(Object.entries(violent.data))}
    <p class="average-value"> ´Promedio: ${averageViolenceArray[index]}<p/>
  </section>
  `;
};
violenceIndicators[0].innerHTML = `${worldbank.filter(indicatorsPeruArray, 'SG.VAW').map(violenceInfo).join('')}`;
violenceIndicators[1].innerHTML = `${worldbank.filter(indicatorsBrazilArray, 'SG.VAW').map(violenceInfo).join('')}`;
violenceIndicators[2].innerHTML = `${worldbank.filter(indicatorsChileArray, 'SG.VAW').map(violenceInfo).join('')}`;
violenceIndicators[3].innerHTML = `${worldbank.filter(indicatorsMexicoArray, 'SG.VAW').map(violenceInfo).join('')}`;
/*
// filtrado por sexo 
const womenInfo = (woman, index, country) => { 
  let womanString = ''; 
  const averageWomenArray = worldbank.calculateAverage(...worldbank.dataOfData(worldbank.genreFilter(country, 'FE')));
  woman.forEach(woman => { const womanList = `
  <div class="indicator-name"> ${woman.indicatorName}
    <div class="buttons">
      <button class="show-btn" id ="show-btn-${woman.countryName}-${woman.countryCode}-${woman.indicatorCode}" data-code="${woman.countryName}-${woman.countryCode}-${woman.indicatorCode}">Ver datos</button>
      <button class="hide-btn" id ="hide-btn-${woman.countryName}-${woman.countryCode}-${woman.indicatorCode}" data-code="${woman.countryName}-${woman.countryCode}-${woman.indicatorCode}">Ocultar</button>
    </div>
  </div>
  <section class="listado-data" id="listas-${woman.countryName}-${woman.countryCode}-${woman.indicatorCode}" data-code="${woman.countryName}-${woman.countryCode}-${woman.indicatorCode}">
    ${dataList(Object.entries(woman.data))}
    <p class="average-value"> Promedio: ${averageWomenArray[index]}<p/> 
  </section>
  `; 
  womanString += womanList; 
  }); 
  console.log(womanString)
  return document.getElementById('demo').innerHTML = womanString;
}; */
// document.getElementById('women-indicators-pe').innerHTML = `${worldbank.genreFilter(indicatorsPeruArray, 'FE').map(womenInfo).join('')}`;
// document.getElementById('women-indicators-br').innerHTML = `${worldbank.genreFilter(indicatorsBrazilArray, 'FE').map(womenInfo).join('')}`;
// document.getElementById('women-indicators-ch').innerHTML = `${worldbank.genreFilter(indicatorsChileArray, 'FE').map(womenInfo).join('')}`;
// document.getElementById('women-indicators-me').innerHTML = `${worldbank.genreFilter(indicatorsMexicoArray, 'FE').map(womenInfo).join('')}`;
// Mostrar indicadores mujeres en html con select 

const womenInfo = (woman) => { 
  let womanName = ''; 
  woman.forEach(girl => {
    const womenList = ` 
    <div class="indicator-name"> ${girl.indicatorName}
      <div class="buttons">
        <button class="show-btn" id ="show-btn-${girl.countryName}-${girl.countryCode}-${girl.indicatorCode}" data-code="${girl.countryName}-${girl.countryCode}-${girl.indicatorCode}">Ver datos</button>
        <button class="hide-btn" id ="hide-btn-${girl.countryName}-${girl.countryCode}-${girl.indicatorCode}" data-code="${girl.countryName}-${girl.countryCode}-${girl.indicatorCode}">Ocultar</button>
      </div>
    </div>
    <div class="listado-data" id="listas-${girl.countryName}-${girl.countryCode}-${girl.indicatorCode}" data-code="${girl.countryName}-${girl.countryCode}-${girl.indicatorCode}> 
      ${dataList(Object.entries(girl.data))} 
    </div>
    `;
    womanName += womenList; 
  }); 
  return document.getElementById('demo').innerHTML = womanName;
}; 

const menInfo = (man, index, country) => {
  const averageMenArray = worldbank.calculateAverage(...worldbank.dataOfData(worldbank.genreFilter(country, 'MA')));
  return `
  <div class="indicator-name"> ${man.indicatorName}
    <div class="buttons">
      <button class="show-btn" id ="show-btn-${man.countryName}-${man.countryCode}-${man.indicatorCode}" data-code="${man.countryName}-${man.countryCode}-${man.indicatorCode}">Ver datos</button>
      <button class="hide-btn" id ="hide-btn-${man.countryName}-${man.countryCode}-${man.indicatorCode}" data-code="${man.countryName}-${man.countryCode}-${man.indicatorCode}">Ocultar</button>
    </div>
  </div>
  <section class="listado-data" id="listas-${man.countryName}-${man.countryCode}-${man.indicatorCode}" data-code="${man.countryName}-${man.countryCode}-${man.indicatorCode}">
    ${dataList(Object.entries(man.data))}
    <p class="average-value"> Promedio: ${averageMenArray[index]}<p/> 
  </section>
  `;
};
document.getElementById('men-indicators-pe').innerHTML = `${worldbank.genreFilter(indicatorsPeruArray, 'MA').map(menInfo)}`;
document.getElementById('men-indicators-br').innerHTML = `${worldbank.genreFilter(indicatorsBrazilArray, 'MA').map(menInfo)}`;
document.getElementById('men-indicators-ch').innerHTML = `${worldbank.genreFilter(indicatorsChileArray, 'MA').map(menInfo)}`;
document.getElementById('men-indicators-me').innerHTML = `${worldbank.genreFilter(indicatorsMexicoArray, 'MA').map(menInfo)}`;

let showBtn = document.querySelectorAll('.show-btn');
let hideBtn = document.querySelectorAll('.hide-btn');
for (let index of showBtn) {
  index.addEventListener('click', () => {
    index.style.display = 'none';
    document.getElementById(`hide-btn-${index.dataset.code}`).style.display = 'block';
    document.getElementById(`listas-${index.dataset.code}`).style.display = 'block';
  });
}
for (let key of hideBtn) {
  key.addEventListener('click', () => {
    key.style.display = 'none';
    document.getElementById(`show-btn-${key.dataset.code}`).style.display = 'block';
    document.getElementById(`listas-${key.dataset.code}`).style.display = 'none';
  });
}
// select para mujeres
document.getElementById('country-select-women').addEventListener('change', (evt) => {
  const selectedIndex = evt.currentTarget.selectedIndex;
  if (selectedIndex === 0) {
    womenInfo(worldbank.genreFilter(indicatorsPeruArray, 'FE')); 
  } else if (selectedIndex === 1) {
    womenInfo(worldbank.genreFilter(indicatorsBrazilArray, 'FE')); 
  } else if (selectedIndex === 2) {
    womenInfo(worldbank.genreFilter(indicatorsChileArray, 'FE')); 
  } else if (selectedIndex === 3) {
    womenInfo(worldbank.genreFilter(indicatorsMexicoArray, 'FE'));  
  }  
}); 
/*
const countrySelectWomen = document.getElementById('country-select-women');

const getSelectValue = () => {
  const countrySelectWomenValue = document.getElementById('country-select-women').value;
  switch (countrySelectWomenValue) {
  case 'Perú':
    document.getElementById('women-indicators-pe').style.display = 'block';
    document.getElementById('women-indicators-br').style.display = 'none';
    document.getElementById('women-indicators-ch').style.display = 'none';
    document.getElementById('women-indicators-me').style.display = 'none';
    break;
  case 'Brasil':
    document.getElementById('women-indicators-br').style.display = 'block';
    document.getElementById('women-indicators-pe').style.display = 'none';
    document.getElementById('women-indicators-ch').style.display = 'none';
    document.getElementById('women-indicators-me').style.display = 'none';
    break;
  case 'Chile':
    document.getElementById('women-indicators-ch').style.display = 'block';
    document.getElementById('women-indicators-pe').style.display = 'none';
    document.getElementById('women-indicators-br').style.display = 'none';
    document.getElementById('women-indicators-me').style.display = 'none';
    break;
  case 'México':
    document.getElementById('women-indicators-me').style.display = 'block';
    document.getElementById('women-indicators-pe').style.display = 'none';
    document.getElementById('women-indicators-br').style.display = 'none';
    document.getElementById('women-indicators-ch').style.display = 'none';
    break;
  }
};
// getSelectValue();
countrySelectWomen.addEventListener('change', getSelectValue);
*/

/* const womenShowIndicator = () => {
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
countrySelectWomen.addEventListener('click', womenShowIndicator); */
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
  document.getElementById('upward-page').style.display = 'none';
  document.getElementById('falling-page').style.display = 'none';
});
document.getElementById('brazil-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none'; 
  document.getElementById('brazil-page').style.display = 'block';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('upward-page').style.display = 'none';
  document.getElementById('falling-page').style.display = 'none';
});
document.getElementById('chile-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'block';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none'; 
  document.getElementById('upward-page').style.display = 'none';
  document.getElementById('falling-page').style.display = 'none';
});
document.getElementById('mexico-map').addEventListener('click', () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'block';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('upward-page').style.display = 'none';
  document.getElementById('falling-page').style.display = 'none';
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
  // document.getElementById('women-indicators-pe').style.display = 'none';
  // document.getElementById('women-indicators-br').style.display = 'none';
  // document.getElementById('women-indicators-ch').style.display = 'none';
  // document.getElementById('women-indicators-me').style.display = 'none';
  document.getElementById('upward-page').style.display = 'none';
  document.getElementById('falling-page').style.display = 'none';
});
document.getElementById('men-option').addEventListener('click', () => {
  document.getElementById('men-page').style.display = 'block';
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
  document.getElementById('men-indicators-pe').style.display = 'none';
  document.getElementById('men-indicators-br').style.display = 'none';
  document.getElementById('men-indicators-ch').style.display = 'none';
  document.getElementById('men-indicators-me').style.display = 'none';
  document.getElementById('upward-page').style.display = 'none';
  document.getElementById('falling-page').style.display = 'none';
});
document.getElementById('btn-asc').addEventListener('click', () => {
  document.getElementById('upward-page').style.display = 'block';
  document.getElementById('falling-page').style.display = 'none'; 
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
});
document.getElementById('btn-desc').addEventListener('click', () => {
  document.getElementById('falling-page').style.display = 'block'; 
  document.getElementById('upward-page').style.display = 'none';
  document.getElementById('men-page').style.display = 'none';
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('peru-page').style.display = 'none';
  document.getElementById('brazil-page').style.display = 'none';
  document.getElementById('chile-page').style.display = 'none';
  document.getElementById('mexico-page').style.display = 'none';
  document.getElementById('women-page').style.display = 'none';
});

// document.getElementById('indicadores').addEventListener('click', () => {
//   document.getElementById('tabla').style.display = 'block'
// });