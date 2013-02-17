//set main namespace
goog.provide('hockey_game');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.fill.LinearGradient');
goog.require('lime.RoundedRect');
goog.require('lime.Polygon');
goog.require('lime.Circle');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.MoveTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.RotateBy');
goog.require('lime.GlossyButton');
goog.require('lime.CoverNode');
goog.require('lime.audio.Audio')

//************************* Global Variables  *********************************

var director;
var scene;
var groundLayer;
var ball;
var hockey_stick;
var replayBtn;
var resetBtn;
var point;
var score;
var strikeSound;
var clapSound;

//************************* Entry Point *********************************

hockey_game.start = function()
{

    init();
}

//************************* Initial Function calls  *********************************


function init()
{

    initDirector();
    initScene();
    initGround();
    appendChildren();
    addListeners();
    
}

//************************* Director code  *********************************


function initDirector()
{
    director =  new lime.Director(document.body,1024,768);
    director.makeMobileWebAppCapable();
    director.setDisplayFPS(false);
}

//************************* Scene code  *********************************


function initScene()
{

    scene = new lime.Scene();
 }
 //************************* Objects are created here *********************************

 function initGround()
 {   

    var gradient = new lime.fill.LinearGradient().setDirection(0,0,1,1).addColorStop(0,'#B2DFEE').addColorStop(1, '#0000CD');

    var sky = new lime.Sprite().setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0).setFill(gradient);

    var goalPost = new lime.Sprite().setSize(400,200).setStroke(5,'#ffffff').setPosition(495,360);

    var goalie = new lime.Sprite().setSize(75,75).setFill('goalie.png').setPosition(450,295).setAnchorPoint(0,0);


    var ground = new lime.Sprite().setSize(1024,768).setFill('ground.png').setPosition(0,360).setAnchorPoint(0,0);

    point = 0;

   score = new lime.Label().setPosition(650,650).setText(point).setFontSize(24).setFontColor('#c00').setFill('#ccc');

    

     resetBtn = new lime.GlossyButton('Reset').setSize(150, 38).setPosition(650,600).setRenderer(lime.Renderer.CANVAS);

    replayBtn = new lime.GlossyButton('Replay').setSize(150, 38).setPosition(850,600).setRenderer(lime.Renderer.CANVAS);




     ball = new lime.Circle().setSize(20,20).setFill('glossyBall.png').setPosition(508,635);

     hockey_stick = new lime.Sprite().setSize(200,200).setFill('hockey_stick1.png').setPosition(450,600);

     triangle = new lime.Polygon(340,365,490,365,508,635).setStroke(1,'#ffffff');



    //***** create layer and add sprites

    groundLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);

    strikeSound  = new lime.audio.Audio('strike.mp3');

    clapSound  = new lime.audio.Audio('applause.mp3')


    groundLayer.appendChild(sky);

   groundLayer.appendChild(goalPost);


    groundLayer.appendChild(ground);

    groundLayer.appendChild(goalie);


    groundLayer.appendChild(hockey_stick);

    groundLayer.appendChild(ball);

    groundLayer.appendChild(resetBtn)

    groundLayer.appendChild(replayBtn);

    groundLayer.appendChild(score);

    groundLayer.appendChild(triangle);

    
}
//************************* add objects to Scene *********************************

function appendChildren()
{ 

    

    scene.appendChild(groundLayer);    

    director.replaceScene(scene);

}



//************************* Event Listeners are added here *********************************

function addListeners()
{
    goog.events.listen(hockey_stick, [ 'touchstart','mousedown' ] , moveToPosition);
    goog.events.listen(resetBtn,[ 'touchstart','mousedown' ] , resetScene);
    goog.events.listen(replayBtn,[ 'touchstart','mousedown' ] , replayScene);

}

//************************* Event Listeners are fired here *********************************


function replayScene()
{
    point = 0;
    score.setText(point);
    resetScene();

}


function moveToPosition(e) 
{
    strikeSound.play();
    var num = Math.random()

    if(num < 0.25)
    {
        num = 410;
        point++;

        
    }

    else if(num > 0.25 && num < 0.5)
    {
        num = 580;
        point++;
        
    }

    else
    {
        num = 490;
        point--;
        if(point < 1)
        {
            point = 0;
        }
        
    }
     
      ball.runAction(
                        new lime.animation.Spawn(
                                                    new lime.animation.MoveTo(num,365).setDuration(1),
                                                    new lime.animation.ScaleTo(0.5).setDuration(1),
                                                    new lime.animation.RotateBy(1000).setDuration(1)
              
                                                )
                    );

      score.setText(point);

      if(num == 410 ||  num == 580)
      {
        clapSound.play();
      }

      goog.events.unlisten(hockey_stick, [ 'touchstart','mousedown' ] , moveToPosition);

};

function resetScene()
{
    strikeSound.stop();
    clapSound.stop();
    ball.setPosition(508,635);
    ball.setScale(1);
    addListeners();
}













    