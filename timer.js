goog.provide('hockey.Timer');
goog.require('lime.Layer');
goog.require('lime.scheduleManager');

var timerText;

hockey.Timer = function() {
   
    goog.base(this) ;
    
    timerText = new lime.Label().setPosition(508,735).setText('5').setFontSize(40).setFontColor('ffffff')
     this.appendChild(timerText);  

     hockey.Timer.startTimer();

     

}
goog.inherits(hockey.Timer, lime.Layer) ;

hockey.Timer.startTimer = function()
{
	 var num = 6;

	lime.scheduleManager.scheduleWithDelay(function(dt){
	   num --;
	   timerText.setText(num);
	   if(num == 0 )
	   {
	   		hockey.SceneOne.showNotice();
	   }
	},this,1000,6);
}
