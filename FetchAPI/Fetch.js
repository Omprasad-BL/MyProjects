let countryList= document.querySelector('.countries');


function displayCountryDetails(data) {
    const html=`<article class="country">
    <img src="${data.flags.png}" alt="" class="country_img">
    <div class="country_data">
    <h3 class="country_name">${data.altSpellings
    }</h3>
    <h3 class="country_region">${data.region}</h3>
    <p class="country_row">
        ${data.population}
    </p>
    <p class="country_row">
        ${data.timezones}
    </p>
    <p class="country_row">
        ${Object.values(data.languages)
        }
    </p>
</div>
  </article>`;
  countryList.insertAdjacentHTML('beforeend',html);
}




function getCountryInfo(country){
    let promise1=fetch('https://restcountries.com/v3.1/name/'+ country)
    let promise2= promise1.then((response)=>{
        // console.log(response);
       return response.json();
    }).catch((er)=>{
        console.log(err);
    })

      promise2.then((data)=>{
        console.log(data);
        displayCountryDetails(data[0]);
    });
}
// getCountryInfo('india');
// getCountryInfo('nepal');
// getCountryInfo('russia');
function check(){
 var ct= document.getElementById("country").value;
 getCountryInfo(ct);

}
