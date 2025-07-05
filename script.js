fetch('data.json')
    .then(response => response.json())
    .then(data => {

        const selectRegion = document.getElementById('selectRegion');

        const uniqueRegions = [...new Set(data.map(obj => obj.region))];

        uniqueRegions.forEach(region => {
            selectRegion.innerHTML += `<option value="${region}">${region}</option>`;
        });


        selectRegion.addEventListener('change', () => {
            const selectedRegion = selectRegion.value;
            const filteredCountries = data.filter(country => country.region === selectedRegion);

            const countryCardsContainer = document.querySelector('.countryCardsContainer');
            countryCardsContainer.innerHTML = "";

            filteredCountries.forEach(country => {
                const cardTemplate = document.createElement('div');
                cardTemplate.className = 'card-template flex hidde flex-col w-full bg-[#2b3945] shadow-lg rounded-md';

                cardTemplate.innerHTML += `
                    <div>
                        <img class="rounded-t-md h-48 w-full object-cover" src="${country.flags.svg}" />
                    </div>
                    <div class="w-full  px-6 pb-16">
                        <h1 class="font-semibold  text-3xl mt-8">${country.name}</h1>
                        <p class="font-medium mt-6">Population:<span class="font-thin text-gray-400">${" " + country.population}</span></p>
                        <p class="font-medium">Region: <span class="font-thin text-gray-400"> ${" " + country.region}</span></p>
                        <p class="font-medium">Captal:<span class="font-thin text-gray-400"> ${" " + country.capital}</p>
                    </div>
                `;
                countryCardsContainer.appendChild(cardTemplate);
            });
        })



        const countryCardsContainer = document.querySelector('.countryCardsContainer');

        data.forEach(country => {
            const cardTemplate = document.createElement('div');
            cardTemplate.className = 'card-template flex hidde flex-col w-full bg-[#2b3945] shadow-lg rounded-md';

            cardTemplate.innerHTML += `
                <div>
                    <img class="rounded-t-md h-48 w-full object-cover" src="${country.flags.svg}" />
                </div>
                <div class="w-full  px-6 pb-16">
                    <h1 class="font-semibold  text-3xl mt-8">${country.name}</h1>
                    <p class="font-medium mt-6">Population:<span class="font-thin text-gray-400">${" " + country.population}</span></p>
                    <p class="font-medium">Region: <span class="font-thin text-gray-400"> ${" " + country.region}</span></p>
                    <p class="font-medium">Captal:<span class="font-thin text-gray-400"> ${" " + country.capital}</p>
                </div>
            `;
            countryCardsContainer.appendChild(cardTemplate);
        });


        const searchInput = document.querySelector('.searchInput');
        const searchBtn = document.querySelector('.searchBtn');
        const showDetailsOfCountries = document.querySelector('.showDetailsOfCountries');
        const inputRegion = document.querySelector('.inputRegion');


        function displaySearchedCountries(countriesSearch) {
            countriesSearch.forEach(country => {
                const countryElement = document.createElement('div');
                countryElement.className = '';
                countryElement.innerHTML += `
                    <div class="mt-14 hiddn flex flex-col md:flex-row md:gap-44">
                        <div class="md:w-1/2 bg-red-90 shadow-2xl"><img class="md:w-5/5 md:h-full"
                                src="${country.flag}" alt="" height="40px"></div>
                        <div class="md:w-1/2">
                            <h1 class="mt-10 font-bold text-2xl cursor-pointer">${" " + country.name}</h1>
                            <div class="md:flex w-full gap-60">

                                <div class="mt-6 md:mt-8  leading-loose">
                                    <p>Native Name:${" " + country.nativeName}</p>
                                    <p>Population:${" " + country.population}</p>
                                    <p>Region:${" " + country.region}</p>
                                    <p>Sub Region:${" " + country.subregion}</p>
                                    <p>Capital:${" " + country.capital}</p>
                                </div>
                                <div class="mt-6 md:mt-8 leading-loose">
                                    <p>Top Level Domain:${" " + country.topLevelDomain}</p>
                                    <p>Currencies:${" " + country.capital}</p>
                                    <p>Languages:${" " + country.capital}</p>
                                </div>

                            </div>

                            <div class="mt-6 md:mt-24 md:flex md:items-center md:justify-start md:gap-6">
                                <p class="text-1xl font-semibold mb-4">Border Countries:</p>
                                <div class="flex gap-4 w-full md:w-2/4">
                                    <button
                                        class="btn px-6 py-1 bg-[#2b3945] flex items-center justify-center shadow-2xl p-1 gap-1 rounded-sm cursor-pointer">${" " + country.borders[0]}</button>
                                    <button
                                        class="btn px-6 py-1 bg-[#2b3945] flex items-center justify-center shadow-2xl p-1 gap-1 rounded-sm cursor-pointer">${" " + country.borders[1]}</button>
                                    <button
                                        class="btn px-6 py-1 bg-[#2b3945] flex items-center justify-center shadow-2xl p-1 gap-1 rounded-sm cursor-pointer">${" " + country.borders[2]}</button>
                                </div>

                            </div>
                        </div>
                    </div>
                `;
                showDetailsOfCountries.appendChild(countryElement);
            });
        }

        // displaySearchedCountries(data);

        searchBtn.addEventListener('click', () => {
            const search = searchInput.value.trim().toLowerCase();

            if (search) {
                const filterCountry = data.filter(country =>
                    country.name.toLowerCase().includes(search)
                );
                countryCardsContainer.innerHTML = "";
                inputRegion.classList.add('hidden');
                displaySearchedCountries(filterCountry);
            } else {
                displaySearchedCountries(data.name);
            }
        }); // check it out tomorrow.

        const backBtn = document.querySelector('.backBtn');

        backBtn.addEventListener('click', () => {
            showDetailsOfCountries.innerHTML = "";
            location.reload();
        });


    });

const darkBright = document.querySelector('.darkBright');
const header = document.querySelector('.header');
const selectRegion = document.getElementById('selectRegion');
const searchBtn = document.querySelector('.searchBtn');
const searchInput = document.querySelector('.searchInput');
const backBtn = document.querySelector('.backBtn');

darkBright.addEventListener('click', () => {
    document.body.classList.toggle('text-[#202c37]');
    document.body.classList.toggle('bg-[#f2f2f2]');
    header.classList.toggle('bg-white');
    selectRegion.classList.toggle('bg-white');
    searchBtn.classList.toggle('bg-white');
    searchInput.classList.toggle('bg-white');
    backBtn.classList.toggle('bg-white');

    const allCards = document.querySelectorAll('.card-template');
        allCards.forEach(card => {
            card.classList.toggle('bg-white');
            card.classList.toggle('bg-[#2b3945]');
        });


    const allBtn = document.querySelectorAll('.btn');
        allBtn.forEach(btn => {
            btn.classList.toggle('bg-white');
            btn.classList.toggle('bg-[#2b3945]');
        });
});
