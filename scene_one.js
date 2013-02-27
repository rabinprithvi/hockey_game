/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


goog.provide('hockey.SceneOne');

goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.RoundedRect');
goog.require('lime.GlossyButton');
goog.require('lime.Sprite');


hockey.SceneOne = function() {
    
    goog.base(this);
    
    this.groundLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
    
    
    var goalPost = new lime.Sprite().setSize(400,200).setStroke(5,'#ff0000').setPosition(495,360);
    this.groundLayer.appendChild(goalPost);
    
    this.appendChild(this.groundLayer);
    
}

goog.inherits(hockey.SceneOne, lime.Scene) ;
    


