var container = document.createElement("div")
container.className = "container";
var row = document.createElement("div")
row.className = "row";
container.append(row)

var p1 = fetch("https://restcountries.com/v3.1/all")

    .then((data) => data.json())
    .then((data1) => {
        console.log(data1);
        data1.forEach((country, index) => {

            row.innerHTML += ` <div class="col-md-4">
                                                    <div class="card border-primary mb-3" style="max-width: 18rem;">
                                                    <img src="${country['flags']['svg']}" class="card-img-top" alt="..." style="text-align:center;max-width:18rem;height:120px">
                                                    <div class="card-header" style="text-align:center">${country['name']['common']}</div>
                                                    <div class="card-body text-primary">
                                                        
                                                        <p class="card-text" style="text-align:center">Capital :${country['capital']}</p>
                                                        <p class="card-text" style="text-align:center">Region :${country['region']}</p>
                                                        <p class="card-text" style="text-align:center">Country Code :${country['altSpellings'][0]}</p>
                                                    </div>
                                                    </div>
                                                    </div>`
            document.body.append(container)

        })
    }
    );