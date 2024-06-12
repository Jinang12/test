let proxyUrl = 'https://cors-anywhere.herokuapp.com/';

// Third-party API URLs
let url1 = `${proxyUrl}http://api.weatherapi.com/v1/current.json?key=527619bad6e54defbe870545241106&q=new%20york`;
let url2 = `${proxyUrl}http://api.weatherapi.com/v1/current.json?key=527619bad6e54defbe870545241106&q=sydney`;
let url3 = `${proxyUrl}http://api.weatherapi.com/v1/current.json?key=527619bad6e54defbe870545241106&q=Jakarta`;
let url4 = `${proxyUrl}http://api.weatherapi.com/v1/current.json?key=527619bad6e54defbe870545241106&q=shanghai`;
let url5 = `${proxyUrl}http://api.weatherapi.com/v1/current.json?key=527619bad6e54defbe870545241106&q=Toronto`;
let url6 = `${proxyUrl}http://api.weatherapi.com/v1/current.json?key=527619bad6e54defbe870545241106&q=Lahore`;

    fetch(url1)
    .then(res => res.json())
    .then(data => {
        let elem1 = document.querySelector(".table-responsive");
        elem1.innerHTML = `
        <table class="table text-center">
        <thead>
            <tr>
                <th style="width: 34%;"></th>
                <th style="width: 22%;">Temperature</th>
                <th style="width: 22%;">Humidity</th>
                <th style="width: 22%;">Winds</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" class="text-start">New York</th>
                <td>${data.current.temp_c}°C<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
                <td>${data.current.humidity}%<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
                <td>${data.current.wind_kph}kph<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            </tr>
        </tbody>
        </table>
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    
    fetch(url2)
    .then(res => res.json())
    .then(data => {
        let elem2 = document.querySelector(".table-responsive");
        elem2.innerHTML += `
        <table class="table text-center">
        <thead>
            <tr>
                <th style="width: 34%;"></th>
                <th style="width: 22%;"></th>
                <th style="width: 22%;"></th>
                <th style="width: 22%;"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" class="text-start">Sydney</th>
                <td>${data.current.temp_c}°C<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
                <td>${data.current.humidity}%<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
                <td>${data.current.wind_kph}kph<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            </tr>
        </tbody>
        </table>
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
 
    fetch(url3)
    .then(res => res.json())
    .then(data => {
        let elem3 = document.querySelector(".table-responsive");
        elem3.innerHTML += `
        <table class="table text-center">
        <thead>
            <tr>
                <th style="width: 34%;"></th>
                <th style="width: 22%;"></th>
                <th style="width: 22%;"></th>
                <th style="width: 22%;"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" class="text-start">Jakarta</th>
                <td>${data.current.temp_c}°C<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
                <td>${data.current.humidity}%<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
                <td>${data.current.wind_kph}kph<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            </tr>
        </tbody>
        </table>
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    fetch(url4)
    .then(res => res.json())
    .then(data => {
        let elem4 = document.querySelector(".table-responsive");
        elem4.innerHTML += `
        <table class="table text-center">
        <thead>
            <tr>
                <th style="width: 34%;"></th>
                <th style="width: 22%;"></th>
                <th style="width: 22%;"></th>
                <th style="width: 22%;"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" class="text-start">Shanghai</th>
                <td>${data.current.temp_c}°C<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
                <td>${data.current.humidity}%<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
                <td>${data.current.wind_kph}kph<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            </tr>
        </tbody>
        </table>
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    fetch(url5)
    .then(res => res.json())
    .then(data => {
        let elem5 = document.querySelector(".table-responsive");
        elem5.innerHTML += `
        <table class="table text-center">
        <thead>
            <tr>
                <th style="width: 34%;"></th>
                <th style="width: 22%;"></th>
                <th style="width: 22%;"></th>
                <th style="width: 22%;"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" class="text-start">Toronto</th>
                <td>${data.current.temp_c}°C<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
                <td>${data.current.humidity}%<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
                <td>${data.current.wind_kph}kph<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            </tr>
        </tbody>
        </table>
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    fetch(url6)
    .then(res => res.json())
    .then(data => {
        let elem6 = document.querySelector(".table-responsive");
        elem6.innerHTML += `
        <table class="table text-center">
        <thead>
            <tr>
                <th style="width: 34%;"></th>
                <th style="width: 22%;"></th>
                <th style="width: 22%;"></th>
                <th style="width: 22%;"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" class="text-start">Lahore</th>
                <td>${data.current.temp_c}°C<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
                <td>${data.current.humidity}%<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
                <td>${data.current.wind_kph}kph<svg class="bi" width="24" height="24"><use xlink:href="#check"></use></svg></td>
            </tr>
        </tbody>
        </table>
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
let element = document.getElementById("searchButton");
element.addEventListener('click', (event) => {
    event.preventDefault();
    let searchInput = document.getElementById("search");
    let city = searchInput.value;
   // let url =  `http://api.weatherapi.com/v1/current.json?key=527619bad6e54defbe870545241106&q=${city}`;
   fetch(url)
        .then(res => res.json())
        .then(data => {
            let title = document.querySelector(".container h1");
            title.textContent = `Weather for ${city}`;

            let val = document.querySelector("#selector");
            val.innerHTML = `
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Temperature</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">${data.current.temp_c}°C</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Cloudiness: ${data.current.cloud}%</li>
                                <li>Feels like: ${data.current.feelslike_c}°C</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Humidity</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">${data.current.humidity}%</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Pressure: ${data.current.pressure_mb} mb</li>
                                <li>Precipitation: ${data.current.precip_mm} mm</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm border-primary">
                        <div class="card-header py-3 text-bg-primary border-primary">
                            <h4 class="my-0 fw-normal">Winds</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">${data.current.wind_kph} kph</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Direction: ${data.current.wind_dir}</li>
                                <li>Gusts: ${data.current.gust_kph} kph</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        })
        .catch(error => console.error('Error:', error));
});
