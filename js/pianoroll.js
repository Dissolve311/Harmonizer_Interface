timebase=16;
actx=new AudioContext();
osc=actx.createOscillator();
gain=actx.createGain();
gain.gain.value=0;
osc.type="sawtooth";
osc.start();
osc.connect(gain).connect(actx.destination);

function Callback(ev){
    osc.detune.setValueAtTime((ev.n-69)*100,ev.t);
    gain.gain.setTargetAtTime(0.5,ev.t,0.005);
    gain.gain.setTargetAtTime(0,ev.g,0.1);
}
function Play(){
    actx.resume();
    document.getElementById("proll").play(actx,Callback);
}
function Layout(k){
    switch(k.id){
    case "xrange":
        document.getElementById("proll").xrange=k.value*timebase;
        break;
    case "xoffset":
        document.getElementById("proll").xoffset=k.value*timebase;
        break;
    case "yrange":
        document.getElementById("proll").yrange=k.value;
        break;
    case "yoffset":
        document.getElementById("proll").yoffset=k.value;
        break;
    }
}