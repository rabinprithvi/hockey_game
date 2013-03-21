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

     var icon = new lime.Sprite().setSize(1024,768).setFill('images/home.png').setPosition(0,0).setAnchorPoint(0,0);
    splashLayer.appendChild(icon);

    this.playBtn = new lime.Sprite().setFill('images/play.png').setPosition(825,600).setAnchorPoint(0,0);
    splashLayer.appendChild(this.playBtn);    

    this.appendChild(splashLayer);
}

goog.inherits(hockey.SplashScene, lime.Scene) ;


