function addEventListeners()
{
    goog.events.listen(hockey_stick, [ 'touchstart','mousedown' ] , moveToPosition);
    goog.events.listen(resetBtn,[ 'touchstart','mousedown' ] , resetScene);
    goog.events.listen(replayBtn,[ 'touchstart','mousedown' ] , replayScene);
    goog.events.listen(one,[ 'touchstart','mousedown' ] , onOneClick);
    goog.events.listen(two,[ 'touchstart','mousedown' ] , onTwoClick);
    goog.events.listen(three,[ 'touchstart','mousedown' ] , onThreeClick);
    goog.events.listen(four,[ 'touchstart','mousedown' ] , onFourClick);
    goog.events.listen(five,[ 'touchstart','mousedown' ] , onFiveClick);
    goog.events.listen(six,[ 'touchstart','mousedown' ] , onSixClick);
    goog.events.listen(seven,[ 'touchstart','mousedown' ] , onSevenClick);
    goog.events.listen(eight,[ 'touchstart','mousedown' ] , onEightClick);
    goog.events.listen(nine,[ 'touchstart','mousedown' ] , onNineClick);
    goog.events.listen(zero,[ 'touchstart','mousedown' ] , onZeroClick);
    goog.events.listen(undo,[ 'touchstart','mousedown' ] , resetText);

}

function removeListener()
{
  goog.events.unlisten(hockey_stick, [ 'touchstart','mousedown' ] , moveToPosition);
   
}

