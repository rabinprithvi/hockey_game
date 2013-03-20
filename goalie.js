/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


goog.provide('hockey.Goalie');
goog.require('lime.Sprite');


hockey.Goalie = function() {
    
    goog.base(this) ;
    
    var goalie = new lime.Sprite().setFill('images/goalie.png').setPosition(380,70).setAnchorPoint(0,0);
     this.appendChild(goalie);
}
goog.inherits(hockey.Goalie, lime.Sprite) ;
    


