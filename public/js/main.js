const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) =>{
    event.preventDefault();
    let cityVal = cityName.value; 
    if(cityVal === ""){
        city_name.innerText = `Plz write the name before you search`;
        datahide.classList.add('data_hide');
    }else{  
        try{
            let url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9e9df69f07b18057ca69efa4528edce7` ;
            const response = await fetch(url);
            const data = await response.json(); 
            const arrData = [data];
            city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMod =  arrData[0].weather[0].main;
            if(tempMod== "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68' aria-hidden='true'></i>";
            }else if(tempMod == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6' aria-hidden='true'></i>";
            }else if(tempMod == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be' aria-hidden='true'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6' aria-hidden='true'></i>";
            }   
            datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText = `Plz Enter the City Name Correct`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getInfo);

