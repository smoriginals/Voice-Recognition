window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.inerimResults = true;

let p = document.createElement('p');
const voiceText = document.querySelector('.voice-text');
voiceText.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.result)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript;
    if (e.result[0].isfinal) {
        p = document.createElement('p');
        voiceText.appendChild(p);
    }
    console.log(transcript);
});

recognition.addEventListener('end', recognition.start);

recognition.start();