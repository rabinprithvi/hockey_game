function replayScene()
{
    point = 0;
    score.setText(point);
    resetScene();

}


function moveToPosition(e) 
{
    startStrikeAudio();
    calculatePoints();
    runAnimation();
    removeListener()
}
 
function calculatePoints()
{
   if(triangle.getAngleText_3() == 3 && triangle.getAngleText_4() == 0)
    {
        num = 335;
    }
    else
    {
        num  = 495;
    }

}

function  runAnimation()
{
     
      ball.runAction(
                        new lime.animation.Spawn(
                                                    new lime.animation.MoveTo(num,365).setDuration(1),
                                                    new lime.animation.ScaleTo(0.5).setDuration(1),
                                                    new lime.animation.RotateBy(1000).setDuration(1)
              
                                                )
                    );

      score.setText(point);

      if(num == 335 )
      {
        startClapAudio();
      }


}

function resetScene()
{
    stopStrikeAudio();
    stopClapAudio();
    ball.setPosition(508,635);
    ball.setScale(1);
    resetText();
    addEventListeners();
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

function resetText()
{
    triangle.updateAngleText_4("?");
    triangle.updateAngleText_3("?");

}