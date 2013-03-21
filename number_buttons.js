/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


goog.provide('hockey.NumberButtons');
goog.require('lime.Sprite');
goog.require('lime.Circle');


hockey.NumberButtons = function() {

    var one,two,three,four,five,six,seven,eight,nine,zero,undo;

    
    goog.base(this) ;
    
    this.one = new lime.Sprite().setSize(50,50).setFill('images/1.png').setPosition(750,530).setAnchorPoint(0,0);
    this.two = new lime.Sprite().setSize(50,50).setFill('images/2.png').setPosition(805,530).setAnchorPoint(0,0);
    this.three = new lime.Sprite().setSize(50,50).setFill('images/3.png').setPosition(860,530).setAnchorPoint(0,0);
    this.four = new lime.Sprite().setSize(50,50).setFill('images/4.png').setPosition(750,585).setAnchorPoint(0,0);
    this.five = new lime.Sprite().setSize(50,50).setFill('images/5.png').setPosition(805,585).setAnchorPoint(0,0);
    this.six = new lime.Sprite().setSize(50,50).setFill('images/6.png').setPosition(860,585).setAnchorPoint(0,0);
    this.seven = new lime.Sprite().setSize(50,50).setFill('images/7.png').setPosition(750,640).setAnchorPoint(0,0);
    this.eight = new lime.Sprite().setSize(50,50).setFill('images/8.png').setPosition(805,640).setAnchorPoint(0,0);
    this.nine = new lime.Sprite().setSize(50,50).setFill('images/9.png').setPosition(860,640).setAnchorPoint(0,0);    
    this.undo = new lime.Sprite().setSize(50,50).setFill('images/undo.png').setPosition(750,695).setAnchorPoint(0,0);
    this.zero = new lime.Sprite().setSize(50,50).setFill('images/0.png').setPosition(805,695).setAnchorPoint(0,0);
    this.enter = new lime.Sprite().setSize(50,50).setFill('images/enter.png').setPosition(860,695).setAnchorPoint(0,0);
    


    this.appendChild(this.one);
    this.appendChild(this.two);
    this.appendChild(this.three);
    this.appendChild(this.four);
    this.appendChild(this.five);
    this.appendChild(this.six);
    this.appendChild(this.seven);
    this.appendChild(this.eight);
    this.appendChild(this.nine);
    this.appendChild(this.zero);
    this.appendChild(this.undo);
    this.appendChild(this.enter);

}
goog.inherits(hockey.NumberButtons, lime.Sprite) ;
    