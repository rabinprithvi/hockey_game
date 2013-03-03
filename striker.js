/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


goog.provide('hockey.Striker');
goog.require('lime.Layer');


hockey.Striker = function() {
    
    goog.base(this) ;
    
    var hockey_stick = new lime.Sprite().setSize(200,200).setFill('images/hockey_stick.png').setPosition(450,600);
      this.appendChild(hockey_stick);
      
       
      
      

}
         


goog.inherits(hockey.Striker, lime.Layer) ;


    


