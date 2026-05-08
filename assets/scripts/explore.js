// explore.js

window.addEventListener('DOMContentLoaded', init);

function init(){

    let textBox = document.getElementById('text-to-speak');
    let voiceSelect = document.getElementById('voice-select');
    let talkButton = document.querySelector('button');
    let faceImage = document.querySelector('#explore img');

    let voices = [];

    function loadVoices(){

        voices = speechSynthesis.getVoices();

        for(let i = 0; i < voices.length; i++){

            let option = document.createElement('option');

            option.value = i;
            option.textContent = voices[i].name;

            voiceSelect.appendChild(option);
        }
    }

    loadVoices();

    speechSynthesis.addEventListener('voiceschanged', loadVoices);

    talkButton.addEventListener('click', function(){

        let speech = new SpeechSynthesisUtterance(textBox.value);

        speech.voice = voices[voiceSelect.value];

        faceImage.src = './assets/images/smiling-open.png';

        speech.addEventListener('end', function(){

            faceImage.src = './assets/images/smiling.png';

        });

        speechSynthesis.speak(speech);

    });

}