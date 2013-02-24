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
    director.replaceScene(scene);
 }
 
 

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('hockey_game.start', hockey_game.start);









    