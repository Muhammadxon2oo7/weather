const formEl=document.getElementById("form")
const inputEl=document.getElementById("input")
const regionEl=document.getElementById("region")
const bgImageEl=document.getElementById("bgImage")
const selectLocationEl=document.getElementById("select__location")
const weatherCardsWrapper=document.getElementById("weather__cards")


const todayDeg=document.getElementById("deg__num")
const sunToday=document.getElementById("sun__today")
const todayPositionWeather=document.getElementById("today__weather__name")
const todayWindSpeed=document.getElementById("today__wind__speed")
const todayHumidity=document.getElementById("today__humidity")

formEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    switchCase()

    ;(()=>{
        fetch('https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q='+inputEl.value)
        .then(res=>res.json())
        .then(data=>renderData(data))
        
    })()  
    function renderData(data){
        console.log(data);
        todayDeg.textContent=data.current.temp_c;
        sunToday.src = data.current.condition.icon
        todayPositionWeather.textContent=data.current.condition.text
        todayWindSpeed.textContent=" "+data.current.wind_kph
        todayHumidity.textContent=data.current.humidity

        bodyBg()
        
    }
    
})





function show(){
    weatherCardsWrapper.style.display="block"
    selectLocationEl.style.display="none"
    bgImageEl.style.display="none"
    const str = inputEl.value;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    regionEl.textContent=str2
}
function switchCase(){
    let region=inputEl.value
    switch(region.toLowerCase()){
        case "namangan":
            show()
        break;
        case "toshkent":
            show()
        break;
        case "samarqand":
            show()
        break;
        case "andijon":
            show()
        break;
        case "buhoro":
            show()
        break;
        case "fargʻona":
            show()
        break;
        case "jizzax":
            show()
        break;
        case "xorazm":
            show()
        break;
        case "navoiy":
            show()
        break;
        case "qashqadaryo":
            show()
        break;
        case "sirdaryo":
            show()
        break;
        case "surxondaryo":
            show()
        break;
        default:
            alert("Hato krittiz")
    }
}
function bodyBg(){
    if(todayPositionWeather.textContent == 'Sunny'){
        document.body.style.backgroundImage="url('../img/sunnyday.jpg')"
    }else if(todayPositionWeather.textContent == 'Partly cloudy'){
        document.body.style.backgroundImage="url('../img/Partly_cloudy.jpg')"
    }else if(todayPositionWeather.textContent == 'Light rain shower'){
        document.body.style.backgroundImage="url('../img/Light_rain_shower.webp')"
    }else if(todayPositionWeather.textContent == "Clear"){
        document.body.style.backgroundImage="url('../img/CLERA.webp')"
    }else if(todayPositionWeather.textContent == 'Light rain'){
        document.body.style.backgroundImage="url('../img/raining-1.jpg')"
    }
    else{
        document.body.style.backgroundImage="url('../img/else.jpg')"
    }
}


    

