/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


goog.provide('hockey.AngleText');
goog.require('lime.Sprite');
goog.require('lime.Label');


hockey.AngleText = function() 
{
    
    goog.base(this) ;
    
    var score;
    
    this.score = new lime.Label().setFontSize(24).setFontColor('#c00').setFill('#ccc');
    this.appendChild(this.score);
    
    //*********** public functions ************************
    
    hockey.AngleText.prototype.setPosition = function (x,y)
    {
        this.score.setPosition(x,y);
    }   

    hockey.AngleText.prototype.setText = function (text)
    {
        this.score.setText(text);
    }
    
    
}


goog.inherits(hockey.AngleText, lime.Sprite) ;
    


