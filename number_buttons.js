/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


goog.provide('hockey.NumberButtons');
goog.require('lime.Sprite');
goog.require('lime.Circle');


hockey.NumberButtons = function() {
    
    goog.base(this) ;
    
    one = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_1.png').setPosition(750,200).setAnchorPoint(0,0);
    two = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_2.png').setPosition(800,200).setAnchorPoint(0,0);
    three = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_3.png').setPosition(850,200).setAnchorPoint(0,0);
    four = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_4.png').setPosition(750,250).setAnchorPoint(0,0);
    five = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_5.png').setPosition(800,250).setAnchorPoint(0,0);
    six = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_6.png').setPosition(850,250).setAnchorPoint(0,0);
    seven = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_7.png').setPosition(750,300).setAnchorPoint(0,0);
    eight = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_8.png').setPosition(800,300).setAnchorPoint(0,0);
    nine = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_9.png').setPosition(850,300).setAnchorPoint(0,0);
    zero = new lime.Sprite().setSize(50,50).setFill('images/glass_numbers_0.png').setPosition(850,150).setAnchorPoint(0,0);
    undo = new lime.Sprite().setSize(50,50).setFill('images/undo.png').setPosition(750,150).setAnchorPoint(0,0);

    this.appendChild(one);
    this.appendChild(two);
    this.appendChild(three);
    this.appendChild(four);
    this.appendChild(five);
    this.appendChild(six);
    this.appendChild(seven);
    this.appendChild(eight);
    this.appendChild(nine);
    this.appendChild(zero);
    this.appendChild(undo);

}
goog.inherits(hockey.NumberButtons, lime.Sprite) ;
    