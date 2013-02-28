/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


goog.provide('hockey.AngleText');
goog.require('lime.Sprite');
goog.require('lime.Label');


hockey.AngleText = function() {
    
    goog.base(this) ;
    
    var score = new lime.Label().setPosition(650,650).setFontSize(24).setFontColor('#c00').setFill('#ccc');
    this.appendChild(score);
}
goog.inherits(hockey.AngleText, lime.Sprite) ;
    


