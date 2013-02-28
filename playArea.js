/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


goog.provide('hockey.PlayArea');
goog.require('lime.Sprite');
goog.require('lime.fill.LinearGradient');


hockey.PlayArea = function() {
    
    goog.base(this) ;
    
    var gradient = new lime.fill.LinearGradient().setDirection(0,0,1,1).addColorStop(0,'#B2DFEE').addColorStop(1, '#0000CD');
    var sky = new lime.Sprite().setSize(1024,768).setPosition(0,0).setAnchorPoint(0,0).setFill(gradient);    
    this.appendChild(sky);
    
    var goalPost = new lime.Sprite().setSize(400,200).setStroke(5,'#ffffff').setPosition(495,360);
    this.appendChild(goalPost);
    
    var ground = new lime.Sprite().setSize(1024,768).setFill('images/ground.png').setPosition(0,360).setAnchorPoint(0,0);
    this.appendChild(ground);
    
    
    
    
    
    
    
}

goog.inherits(hockey.PlayArea, lime.Sprite) ;
    


