
var groundLayer;
var ball;
var hockey_stick;
var replayBtn;
var resetBtn;
var point;
var score;
var strikeSound;
var clapSound;
var triangle;
var number;


var one,two,three,four,five,six,seven,eight,nine,zero,undo;

 //******************************public calls ************************
 
 //called by hockey_game.js

 function createUI()
 { 
   
   showSky();
    
   showGoalPost();

   showGoalie();

   showGround();
   
   showStriker();
   
   showBall();
   
   showResetBtn();
   
   showReplayBtn();
   
   showScore();
   
   showTriangle();
   
   showNumbers();
    
 }
 //******************************private calls ************************
 
 function showGround()
{
    var ground = new lime.Sprite().setSize(1024,768).setFill('images/ground.png').setPosition(0,360).setAnchorPoint(0,0);
    groundLayer.appendChild(ground);

}

function showSky()
{
    var gradient = new lime.fill.LinearGradient().setDirection(0,0,1,1).addColorStop(0,'#B2DFEE').addColorStop(1, '#0000CD');
    var sky = new lime.Sprite().setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0).setFill(gradient);    
    groundLayer.appendChild(sky);
}

function showGoalPost()
{
        var goalPost = new lime.Sprite().setSize(400,200).setStroke(5,'#ffffff').setPosition(495,360);
        groundLayer.appendChild(goalPost);
}

function showGoalie()
{
        var goalie = new lime.Sprite().setSize(75,75).setFill('images/goalie.png').setPosition(450,295).setAnchorPoint(0,0);
        groundLayer.appendChild(goalie);
}

function showStriker()
{
         hockey_stick = new lime.Sprite().setSize(200,200).setFill('images/hockey_stick.png').setPosition(450,600);
         groundLayer.appendChild(hockey_stick);

}

function showBall()
{
         ball = new lime.Circle().setSize(20,20).setFill('images/glossyBall.png').setPosition(508,635);
         groundLayer.appendChild(ball);

}

function showResetBtn()
{
         resetBtn = new lime.GlossyButton('Reset').setSize(150, 38).setPosition(650,600).setRenderer(lime.Renderer.CANVAS);
         groundLayer.appendChild(resetBtn)

}

function showReplayBtn()
{
        replayBtn = new lime.GlossyButton('Replay').setSize(150, 38).setPosition(850,600).setRenderer(lime.Renderer.CANVAS);
        groundLayer.appendChild(replayBtn);

}

function showScore()

{
       score = new lime.Label().setPosition(650,650).setText(point).setFontSize(24).setFontColor('#c00').setFill('#ccc');
       groundLayer.appendChild(score);

}

function showTriangle()
{    
    triangle = new hockey.TriangleShape();
    groundLayer.appendChild(triangle);
    
    var angle_one = triangle.giveAngle(p3,p4,p5,p6);  
    var angle_two = triangle.giveAngle(p1,p2,p5,p6);
    triangle.setAngleText_1(angle_one);
    triangle.setAngleText_2(angle_two);
    triangle.setAngleText_3("?");
    triangle.setAngleText_4("?");
    //alert(angle_one)
    //var angle_two = t.giveAngle(490,635,490,365);  
  //  triangle.angleText = 90;
   // triangle.angle_2 = angle;

   // alert(angle_one);
}

function showNumbers()
{
   one = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_1.png').setPosition(750,200).setAnchorPoint(0,0);
    two = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_2.png').setPosition(800,200).setAnchorPoint(0,0);
    three = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_3.png').setPosition(850,200).setAnchorPoint(0,0);
    four = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_4.png').setPosition(750,250).setAnchorPoint(0,0);
    five = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_5.png').setPosition(800,250).setAnchorPoint(0,0);
    six = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_6.png').setPosition(850,250).setAnchorPoint(0,0);
    seven = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_7.png').setPosition(750,300).setAnchorPoint(0,0);
    eight = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_8.png').setPosition(800,300).setAnchorPoint(0,0);
    nine = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_9.png').setPosition(850,300).setAnchorPoint(0,0);
    zero = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_0.png').setPosition(850,150).setAnchorPoint(0,0);
    undo = new lime.Sprite().setSize(50,50).setFill('images/undo.png').setPosition(750,150).setAnchorPoint(0,0);
    groundLayer.appendChild(one);
    groundLayer.appendChild(two);
    groundLayer.appendChild(three);
    
    groundLayer.appendChild(four);
    groundLayer.appendChild(five);
    groundLayer.appendChild(six);
    
    groundLayer.appendChild(seven);
    groundLayer.appendChild(eight);
    groundLayer.appendChild(nine);
    
    groundLayer.appendChild(zero);
    groundLayer.appendChild(undo);


}

 