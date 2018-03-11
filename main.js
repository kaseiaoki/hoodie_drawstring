let context = new AudioContext();
let buffer = null;
let source = context.createBufferSource();

let request = new XMLHttpRequest();
let name = "Sander Van Doorn Martin Garrix DVBBS - Gold Skies.mp3"
let url = "sound/"+ name

request.open('GET', url, true);
request.responseType = 'arraybuffer';
request.send();

request.onload = function () {
  let res = request.response;
  context.decodeAudioData(res, function (buf) {
    source.buffer = buf;
  });
};


source.connect(context.destination);
let filter = context.createBiquadFilter();
source.connect(filter);
filter.connect(context.destination);
let gainNode = context.createGain();
gainNode.gain.value =1;
filter.type = "highpass";


function getValue() {
    let elementReference = document.getElementById("volume");
    let value = elementReference.value;
    gainNode.gain.value=value;
}

function filter_select() {
	let value = document.getElementById("filters").value;
  type = value;
  filter.type = type;
}
function start() {
    source.start(0);
    document.getElementById("name").innerHTML=name;
}

function stop() {
      source.stop();
}
