
const API_KEY="069b3ba25fe4560ddc4ba7548d2864d5";
function onGeoOk(position){
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    console.log(position);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(reponse=>reponse.json()).then(data=>{
        const weather=document.querySelector("#weather span:first-child");
        const cityContainer=document.querySelector("#weather span:last-child");
        cityContainer.innerText=data.name;
        weather.innerText=`${data.weather[0].main}/${data.main.temp}`;
    });//url응답을 불러오는 함수
}

function onGeoError(){
    alert("날씨정보를 얻지 못했습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);