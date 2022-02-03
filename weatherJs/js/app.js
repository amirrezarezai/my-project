const Weather = new weather('تهران','تهران');
const ui = new UI();


document.addEventListener('DOMContentLoaded',getweather)
document.querySelector('#w-change-btn').addEventListener('click',changelocation)
    function changelocation(){
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;

        Weather.changeLocation(city , state);
         getweather();
    }

function getweather(){
    Weather.getWeather()
    .then(res => {console.log(res)
       ui.paint(res , Weather.location)
    })
    .catch(err => console.log(err.message))

}