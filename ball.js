/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


goog.provide('hockey.Ball');
goog.require('lime.Sprite');
goog.require('lime.Circle');


hockey.Ball = function() {
    
    goog.base(this) ;
    
    ball = new lime.Circle().setSize(40,40).setFill('images/ball.png').setPosition(508,550);
    this.appendChild(ball);
}
goog.inherits(hockey.Ball, lime.Sprite) ;
    


