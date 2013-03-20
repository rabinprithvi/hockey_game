/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


goog.provide('hockey.PlayArea');
goog.require('lime.Sprite');
goog.require('lime.fill.LinearGradient');


hockey.PlayArea = function() {
    
    goog.base(this) ;      
    var ground = new lime.Sprite().setSize(1024,768).setFill('images/ground.png').setPosition(0,0).setAnchorPoint(0,0);
    this.appendChild(ground);   
}

goog.inherits(hockey.PlayArea, lime.Sprite) ;
    


