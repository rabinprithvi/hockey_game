goog.provide('hockey.SplashScene');

goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.RoundedRect');
goog.require('lime.GlossyButton');
goog.require('lime.Sprite');


hockey.SplashScene = function() {
    
    goog.base(this);
    
     

    var splashLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
    this.appendChild(splashLayer);

    var bg = new lime.RoundedRect().setSize(1000, 300).setPosition(0, 150).setFill('#333333').setRadius(50).setAnchorPoint(0,0)
    //splashLayer.appendChild(bg);  

     var icon = new lime.Sprite().setSize(1024,768).setFill('images/home.png').setPosition(0,0).setAnchorPoint(0,0);
    splashLayer.appendChild(icon);

     this.playBtn = new lime.GlossyButton('Play').setSize(250, 70).setPosition(300,300).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
    splashLayer.appendChild(this.playBtn)

    
    
     

    this.appendChild(splashLayer);
}

goog.inherits(hockey.SplashScene, lime.Scene) ;


