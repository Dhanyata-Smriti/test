var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all",true);
xhr.onload=function()
{
    console.log("XMLHttpRequest-status",xhr.status);
    var countries = JSON.parse(xhr.responseText);
    countries.forEach(country => {
        console.log(country.name,":",country.flag);
        console.log(country.name,":","Country_Region: ",country.region,"Country_Sub-Region: ",country.subregion,"Country_Population: ",country.population);

    }
    );
}
xhr.send();