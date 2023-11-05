'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        function(position){
            console.log(position.coords);
            const {latitude} = position.coords;
            const {longitude} =  position.coords;
            console.log(latitude, longitude);

            const coords = [latitude, longitude];
            const map = L.map('map').setView(coords, 13);

            L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);


            map.on('click', function(mapEvent){
            
                L.marker([mapEvent.latlng.lat, mapEvent.latlng.lng])
                  .addTo(map)
                  .bindPopup(
                    L.popup({
                        maxWith: 250,
                        minwith: 100,
                        autoClose: false,
                        closeOnClick: false,
                        content: 'Home',
                        className: 'cycling popup'
                    })
                  )
                .openPopup();
            })
        },
        function(){
            alert('sizning joyingiz aniqlanmadi');
        }
    );
}