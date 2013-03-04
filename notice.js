goog.provide('hockey.Notice');

goog.require('lime.RoundedRect');

hockey.Notice = function() {
    lime.RoundedRect.call(this);


      this.setSize(475 ,100).setPosition(0, 0).setFill('#ffffff').setRadius(50).setAnchorPoint(0,0)
    //this.setSize(250, 100).setFill(back).setAnchorPoint(.5, 0);

    this.title = new lime.Label().setPosition(250, 25).setFontSize(30)
    this.appendChild(this.title);


    
    this.score = new lime.Label().setText('Score : 0').setPosition(250, 75).setFontSize(34).setFontColor('#ff0000');   
    this.appendChild(this.score);
};
goog.inherits(hockey.Notice, lime.RoundedRect);

