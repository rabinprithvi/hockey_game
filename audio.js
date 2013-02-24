goog.require('lime.audio.Audio');

var strikeSound;
var clapSound;

function createAudio()
{
    loadStrikeAudio();
    loadClapAudio();
}

function loadStrikeAudio()
{
    strikeSound  = new lime.audio.Audio('audios/strike.mp3');
}

function loadClapAudio()
{
    clapSound  = new lime.audio.Audio('audios/applause.mp3');
}

function startStrikeAudio()
{
    strikeSound.play();
}

function startClapAudio()
{
    clapSound.play();
}

function stopStrikeAudio()
{
   strikeSound.stop();
    
}

function stopClapAudio()
{
    clapSound.stop(); 
}

//goog.exportSymbol('hockey_game.start', hockey_game.start);



