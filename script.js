fetch('data.json')
    .then(response => response.json())
    .then(data => {

        const selectRegion = document.getElementById('selectRegion');

        // const filterRegion = [...new set(data.map(dRegion => dRegion.region))];

        // filterRegion.forEach(regions => {
        //     const regionOptiion = document.createElement('option');
        //     regionOptiion.value = regions;
        //     regionOptiion.textContent = regions;
        //     selectRegion.appendChild(regionOptiion);
        // });

        // console.log(data);

        //      regions.forEach(region => {
        //   const option = document.createElement('option');
        //   option.value = region;
        //   option.textContent = region;
        //   regionSelect.appendChild(option);
        // });

            data.forEach((dataV, index) => {


                selectRegion.innerHTML += `<option value="${dataV.region}">${dataV.region}</option>`;

            })

        const countryCardsContainer = document.querySelector('.countryCardsContainer');

        data.forEach(country => {
            const cardTemplate = document.createElement('div');
            cardTemplate.className = 'flex flex-col w-full bg-[#2b3945] shadow-lg rounded-md';

            cardTemplate.innerHTML += `
                <div>
                    <img class="rounded-t-md h-48 w-full object-cover" src="${country.flags.svg}" />
                </div>
                <div class="w-full  px-6 pb-16">
                    <h1 class="font-semibold text-white text-3xl mt-8">${country.name}</h1>
                    <p class="text-white  font-medium mt-6">Population:<span class="font-thin text-gray-400">${" " + country.population}</span></p>
                    <p class="text-white font-medium">Region: <span class="font-thin text-gray-400"> ${" " + country.region}</span></p>
                    <p class="text-white font-medium">Captal:<span class="font-thin text-gray-400"> ${" " + country.capital}</p>
                </div>
            `;countryCardsContainer.appendChild(cardTemplate);

        });
    });
