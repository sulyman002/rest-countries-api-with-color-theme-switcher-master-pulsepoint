fetch('data.json')
    .then(response => response.json())
    .then(data => {

        const selectRegion = document.getElementById('selectRegion');


        data.forEach((dataV, index) => {


            selectRegion.innerHTML += `<option value="${dataV.region}">${dataV.region}</option>`;

        })

        const countryCardsContainer = document.querySelector('.countryCardsContainer');

        data.forEach(country => {
            const cardTemplate = document.createElement('div');
            cardTemplate.className = 'flex hidde flex-col w-full bg-[#2b3945] shadow-lg rounded-md';

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
            `; countryCardsContainer.appendChild(cardTemplate);

        });


        const searchInput = document.querySelector('.searchInput');
        const searchBtn = document.querySelector('.searchBtn');
        const showDetailsOfCountries = document.querySelector('.showDetailsOfCountries');


        function displaySearchedCountries(countriesSearch) {
            countryCardsContainer.innerHTML = "";
            showDetailsOfCountries.innerHTML = "";
            countriesSearch.forEach(country => {
                const countryElement = document.createElement('div');
                countryElement.className = '';
                countryElement.innerHTML = `
                    <div class="mt-14 hiddn flex flex-col md:flex-row md:gap-44">
                        <div class="md:w-1/2 bg-red-90 shadow-2xl"><img class="md:w-5/5 md:h-full"
                                src="${country.flag}" alt="" height="40px"></div>
                        <div class="md:w-1/2">
                            <h1 class="text-white mt-10 font-bold text-2xl cursor-pointer">${" " + country.name}</h1>
                            <div class="md:flex w-full gap-60">

                                <div class="text-white mt-6 md:mt-8  leading-loose">
                                    <p>Native Name:${" " + country.nativeName}</p>
                                    <p>Population:${" " + country.population}</p>
                                    <p>Region:${" " + country.region}</p>
                                    <p>Sub Region:${" " + country.subregion}</p>
                                    <p>Capital:${" " + country.capital}</p>
                                </div>
                                <div class="text-white mt-6 md:mt-8 leading-loose">
                                    <p>Top Level Domain:${" " + country.topLevelDomain}</p>
                                    <p>Currencies:${" " + country.capital}</p>
                                    <p>Languages:${" " + country.capital}</p>
                                </div>

                            </div>

                            <div class="text-white mt-6 md:mt-24 md:flex md:items-center md:justify-start md:gap-6">
                                <p class="text-1xl font-semibold mb-4">Border Countries:</p>
                                <div class="flex gap-4 w-full md:w-2/4">
                                    <button
                                        class="px-6 py-1 bg-[#2b3945] flex text-white items-center justify-center shadow-2xl p-1 gap-1 rounded-sm cursor-pointer">France</button>
                                    <button
                                        class="px-6 py-1 bg-[#2b3945] flex text-white items-center justify-center shadow-2xl p-1 gap-1 rounded-sm cursor-pointer">Germany</button>
                                    <button
                                        class="px-6 py-1 bg-[#2b3945] flex text-white items-center justify-center shadow-2xl p-1 gap-1 rounded-sm cursor-pointer">Netherlands</button>
                                </div>

                            </div>
                        </div>
                    </div>
                `;
                showDetailsOfCountries.appendChild(countryElement);
            });
        }

        displaySearchedCountries(data);

        searchBtn.addEventListener('click', () => {
            const search = searchInput.value.trim().toLowerCase();

            if (search) {
                const filterCountry = data.filter(country =>
                    country.name.toLowerCase().includes(search)
                );
                displaySearchedCountries(filterCountry);
            } else {
                displaySearchedCountries(data.name);
            }
        }); // check it out tomorrow.


    });
