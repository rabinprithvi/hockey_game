/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


goog.provide('hockey.SceneOne');

goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Sprite');

goog.require('hockey.PlayArea');
goog.require('hockey.Goalie');
goog.require('hockey.Striker');
goog.require('hockey.Ball');
goog.require('hockey.TriangleShape');
goog.require('hockey.NumberButtons');
goog.require('hockey.AngleText');

hockey.SceneOne = function() 
{
    
    goog.base(this);
    
    var triangle;
    
    this.groundLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
    
    
    var playArea = new hockey.PlayArea();
    this.groundLayer.appendChild(playArea);
    
    var goalie = new hockey.Goalie();
    this.groundLayer.appendChild(goalie);
    
    var striker = new hockey.Striker();
    this.groundLayer.appendChild(striker);
    
    var ball = new hockey.Ball();
    this.groundLayer.appendChild(ball);
    
    this.triangle = new hockey.TriangleShape();
    this.groundLayer.appendChild(this.triangle);

    var numbers = new hockey.NumberButtons();
    this.groundLayer.appendChild(numbers);
    
    
    // init triangle
    var angle_one = this.triangle.giveAngle(p3,p4,p5,p6);  
    var angle_two = this.triangle.giveAngle(p1,p2,p5,p6);
    
   this. triangle.setAngleText_1(angle_one);
    this.triangle.setAngleText_2(angle_two);
    this.triangle.setAngleText_3("?");
    this.triangle.setAngleText_4("?");    
    
    this.appendChild(this.groundLayer);
    
}

goog.inherits(hockey.SceneOne, lime.Scene) ;
    


