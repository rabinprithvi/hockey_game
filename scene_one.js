/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


goog.provide('hockey.SceneOne');

goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Sprite');
goog.require('lime.animation.MoveTo');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.RotateBy');
goog.require('lime.animation.ScaleTo'); 
goog.require('lime.Label');
goog.require('lime.GlossyButton');

goog.require('hockey.PlayArea');
goog.require('hockey.Goalie');
goog.require('hockey.Striker');
goog.require('hockey.Ball');
goog.require('hockey.TriangleShape');
goog.require('hockey.NumberButtons');


var striker;
var score;

var p1 = 335;
var p2 = 365;
var p3 = 490;
var p4 = 365;
var p5 = 490;
var p6 = 635;

var number = 0;
var num = 0;
var point = 0;

var triangle;

hockey.SceneOne = function() 
{

    
    goog.base(this);
    
    
    
    this.groundLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
    
    
    var playArea = new hockey.PlayArea();
    this.groundLayer.appendChild(playArea);
    
    var goalie = new hockey.Goalie();
    this.groundLayer.appendChild(goalie);
    
    striker = new hockey.Striker();
    this.groundLayer.appendChild(striker);
    
    var ball = new hockey.Ball();
    this.groundLayer.appendChild(ball);
    
   triangle = new hockey.TriangleShape(p1,p2,p3,p4,p5,p6);
   this.groundLayer.appendChild(triangle);

   var numbers = new hockey.NumberButtons();
   this.groundLayer.appendChild(numbers);   

    score = new lime.Label().setPosition(650,650).setText('0').setFontSize(24).setFontColor('#c00').setFill('#ccc');
    this.groundLayer.appendChild(score);

    var resetBtn = new lime.GlossyButton('Reset').setSize(150, 38).setPosition(650,600).setRenderer(lime.Renderer.CANVAS);
    this.groundLayer.appendChild(resetBtn);
     
    var angle_one = triangle.giveAngle(p3,p4,p5,p6);  
    var angle_two =     triangle.giveAngle(p1,p2,p5,p6);
    triangle.setAngleText_1(angle_one);

    triangle.setAngleText_2(angle_two);
    triangle.setAngleText_3("?");
    triangle.setAngleText_4("?");


    this.appendChild(this.groundLayer);
    
    //add Listener

    goog.events.listen(numbers.one,[ 'touchstart','mousedown' ] , onOneClick);
   goog.events.listen(numbers.two,[ 'touchstart','mousedown' ] , onTwoClick);
   goog.events.listen(numbers.three,[ 'touchstart','mousedown' ] , onThreeClick);
   goog.events.listen(numbers.four,[ 'touchstart','mousedown' ] , onFourClick);
   goog.events.listen(numbers.five,[ 'touchstart','mousedown' ] , onFiveClick);
   goog.events.listen(numbers.six,[ 'touchstart','mousedown' ] , onSixClick);
   goog.events.listen(numbers.seven,[ 'touchstart','mousedown' ] , onSevenClick);
   goog.events.listen(numbers.eight,[ 'touchstart','mousedown' ] , onEightClick);
   goog.events.listen(numbers.nine,[ 'touchstart','mousedown' ] , onNineClick);
   goog.events.listen(numbers.zero,[ 'touchstart','mousedown' ] , onZeroClick);
   goog.events.listen(numbers.undo,[ 'touchstart','mousedown' ] , resetText);

   goog.events.listen(resetBtn,[ 'touchstart','mousedown' ] , resetScene);

   addListener();

      
}

function addListener()
{
       goog.events.listen(striker, [ 'touchstart','mousedown' ] , moveToPosition);

}

function removeListener()
{
    goog.events.unlisten(striker, [ 'touchstart','mousedown' ] , moveToPosition);
}

function moveToPosition()
{
    calculatePoints();
    runAnimation();
}

function calculatePoints()
{
   if(triangle.getAngleText_3() == 3 && triangle.getAngleText_4() == 0)
    {
        num = 335;
        point++;
    }
    else
    {
        num  = 495;
        point--;
    }

}

function  runAnimation()
{

    var anim = new lime.animation.Spawn(
                                            new lime.animation.MoveTo(num,365).setDuration(1),
                                            new lime.animation.ScaleTo(0.5).setDuration(1),
                                            new lime.animation.RotateBy(1000).setDuration(1)
              
                                        )
    goog.events.listen(anim, lime.animation.Event.STOP, removeListener);

     
      ball.runAction(anim);

      score.setText(point);

      if(num == 335 )
      {
       // startClapAudio();
      }


}

function updateText()
{
    if(bool)
    {
       triangle.updateAngleText_4(number);
        
    }
    else
    {
       triangle.updateAngleText_3(number);
    }
    bool = !bool
}

function onOneClick()
{
    number = 1;
   updateText();
}
function onTwoClick()
{
    number = 2;
    updateText();
}
function onThreeClick()
{
    number = 3;
    updateText();
}
function onFourClick()
{
    number = 4;
    updateText();
}
function onFiveClick()
{
    number = 5;
    updateText();
}
function onSixClick()
{
    number = 6;
    updateText();
}
function onSevenClick()
{
    number = 7;
    updateText();
}
function onEightClick()
{
    number = 8;
    updateText();
}
function onNineClick()
{
    number = 9;
    updateText();
}
function onZeroClick()
{
    number = 0;
    updateText();
}
var bool = false;


function resetText()
{
    bool = false;
    triangle.updateAngleText_4("?");
    triangle.updateAngleText_3("?");

}

function resetScene()
{
   // stopStrikeAudio();
    //stopClapAudio();
    ball.setPosition(508,635);
    ball.setScale(1);
    resetText();
    addListener();
}

goog.inherits(hockey.SceneOne, lime.Scene) ;
    


