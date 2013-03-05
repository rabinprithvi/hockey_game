//set main namespace
goog.provide('hockey_game');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.transitions.SlideInRight'); 

//custom classes
goog.require('hockey.SplashScene');
goog.require('hockey.SceneOne');

//************************* Global Variables  *********************************

var director;
var sceneOne;
 var splashScene;



//************************* Entry Point *********************************

hockey_game.start = function()
{

    initDirector();    
    initScenes();
    addListeners();    
}


//************************* Director code  *********************************
function initDirector()
{
    director =  new lime.Director(document.body,1024,768);
    director.makeMobileWebAppCapable();
    director.setDisplayFPS(false);
}
//************************* Scene code  ********************************
function initScenes()
{
    
    splashScene = new hockey.SplashScene();   
    director.replaceScene(splashScene);  
    
}
//*********************Event Listeners ***********************************
function addListeners()
{    
        goog.events.listen(splashScene.playBtn,[ 'touchstart','mousedown' ] , showSceneOne);         
 }
//*********************Event handling ***********************************
 function showSceneOne()
 {
    sceneOne = new hockey.SceneOne();
   director.replaceScene(sceneOne, lime.transitions.SlideInRight, 1);
    sceneOne.groundLayer.setDirty(255); 
    
 }  
 //*********************End ***********************************

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('hockey_game.start', hockey_game.start);









    