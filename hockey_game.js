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
goog.require('lime.transitions.Dissolve');
goog.require('lime.transitions.SlideInRight');





//************************* Global Variables  *********************************

var director;
var scene;
var groundLayer;
var ball;
var hockey_stick;
var replayBtn;
var resetBtn;
var point = 0;
var score;
var trianlge;
var num;

//************************* Entry Point *********************************

hockey_game.start = function()
{

    init();
}

//************************* Initial Function calls  *********************************


function init()
{

    initDirector();   
    initSceneLayer();
    initSplashScreen()
    createUI(); //UI is handled by display.js   
    createAudio();//audio is handled by audio.js
    
    addEventListeners();//events are handled by eventListener.js
    
    
}

//************************* Director code  *********************************


function initDirector()
{
    director =  new lime.Director(document.body,1024,768);
    director.makeMobileWebAppCapable();
    director.setDisplayFPS(false);
}

//************************* Scene code  *********************************


function initSceneLayer()
{

    scene = new lime.Scene();
    groundLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
    scene.appendChild(groundLayer);
    //scene.appendChild(groundLayer);
  //  director.replaceScene(scene);
 }
 var splashLayer;
 var splashScene;

function initSplashScreen()
{

    splashScene = new lime.Scene();

    splashLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
    scene.appendChild(splashLayer);

    var bg = new lime.RoundedRect().setSize(1000, 300).setPosition(0, 150).setFill('#333333').setRadius(50).setAnchorPoint(0,0)
    splashLayer.appendChild(bg);

    var playBtn = new lime.GlossyButton('Play').setSize(250, 70).setPosition(625,300).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
    splashLayer.appendChild(playBtn)

     var icon = new lime.Sprite().setSize(200,200).setFill('images/hockeylogo.png').setPosition(150,200).setAnchorPoint(0,0);
    splashLayer.appendChild(icon);

    goog.events.listen(playBtn,[ 'touchstart','mousedown' ] , startPlay);

    splashScene.appendChild(splashLayer);

     director.replaceScene(splashScene);
 }

 function startPlay()
 {
   director.replaceScene(scene,lime.transitions.SlideInRight,1);
    groundLayer.setDirty(255);
   // alert("hi")
    //director.popScene();
    //director.replaceScene(scene,lime.transitions.Dissolve,2);
            
   // scene.removeChild(splashLayer);
    
 }
 
 

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('hockey_game.start', hockey_game.start);









    