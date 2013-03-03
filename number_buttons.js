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
    
    this.one = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_1.png').setPosition(750,200).setAnchorPoint(0,0);
    this.two = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_2.png').setPosition(800,200).setAnchorPoint(0,0);
    this.three = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_3.png').setPosition(850,200).setAnchorPoint(0,0);
    this.four = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_4.png').setPosition(750,250).setAnchorPoint(0,0);
    this.five = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_5.png').setPosition(800,250).setAnchorPoint(0,0);
    this.six = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_6.png').setPosition(850,250).setAnchorPoint(0,0);
    this.seven = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_7.png').setPosition(750,300).setAnchorPoint(0,0);
    this.eight = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_8.png').setPosition(800,300).setAnchorPoint(0,0);
    this.nine = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_9.png').setPosition(850,300).setAnchorPoint(0,0);
    this.zero = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_0.png').setPosition(850,150).setAnchorPoint(0,0);
    this.undo = new lime.Sprite().setSize(50,50).setFill('images/undo.png').setPosition(750,150).setAnchorPoint(0,0);

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

}
goog.inherits(hockey.NumberButtons, lime.Sprite) ;
    