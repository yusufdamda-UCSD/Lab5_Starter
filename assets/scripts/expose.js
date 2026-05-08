// expose.js

window.addEventListener('DOMContentLoaded', init);

function init(){

    let hornSelect = document.getElementById('horn-select');
    let hornImage = document.querySelector('#expose img');
    let audio = document.querySelector('audio');
    let jsConfetti = new JSConfetti();

    hornSelect.addEventListener('change', function(){

        let horn = hornSelect.value;

        if(horn == 'air-horn'){
            hornImage.src = './assets/images/air-horn.svg';
            hornImage.alt = 'Air Horn';
            audio.src = './assets/audio/air-horn.mp3';
        }

        else if(horn == 'car-horn'){
            hornImage.src = './assets/images/car-horn.svg';
            hornImage.alt = 'Car Horn';
            audio.src = './assets/audio/car-horn.mp3';
        }

        else if(horn == 'party-horn'){
            hornImage.src = './assets/images/party-horn.svg';
            hornImage.alt = 'Party Horn';
            audio.src = './assets/audio/party-horn.mp3';
        }

    });
    let volumeSlider = document.getElementById('volume');
let volumeImage = document.querySelector('#volume-controls img');

volumeSlider.addEventListener('input', function(){

    let volume = volumeSlider.value;

    audio.volume = volume / 100;

    if(volume == 0){
        volumeImage.src = './assets/icons/volume-level-0.svg';
    }

    else if(volume < 33){
        volumeImage.src = './assets/icons/volume-level-1.svg';
    }

    else if(volume < 67){
        volumeImage.src = './assets/icons/volume-level-2.svg';
    }

    else{
        volumeImage.src = './assets/icons/volume-level-3.svg';
    }

});
  let playButton = document.querySelector('button');

  playButton.addEventListener('click', function(){

    audio.play();

     if(hornSelect.value == 'party-horn'){
        jsConfetti.addConfetti();
    }

});
}