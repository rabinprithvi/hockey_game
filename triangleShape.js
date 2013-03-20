/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

goog.provide('hockey.TriangleShape');

goog.require('lime.Polygon');

hockey.TriangleShape = function(p1,p2,p3,p4,p5,p6)
{
    
    goog.base(this);
    
    var angleText_1;
    var angleText_2;
    var angleText_3;
    var angleText_4;
    
     this.setStroke(1,'#ffffff');
     this.addPoints(p1,p2,p3,p4,p5,p6); 
    

    //public functions
    hockey.TriangleShape.prototype.giveAngle = function(x1, y1, x2, y2)
    {
        var dx = x2 - x1;
        var dy = y2 - y1;
        var radian =  Math.atan2(dy,dx);
        var angle = radian * (180 / Math.PI);

       // this.angleText.setText(angle);
        return Math.round(angle);
    }

    hockey.TriangleShape.prototype.setAngleText_1 = function(text)
    {
        this.angleText_1 = new lime.Label().setPosition(p3 + 20, p4 + 20).setText(text).setFontSize(24).setFontColor('#c00');
         this.appendChild(this.angleText_1);
        this.angleText_1.setText(text);
    }

    hockey.TriangleShape.prototype.setAngleText_2 = function(text)
    {
        this.angleText_2 = new lime.Label().setPosition(p1 - 20, p2 + 20).setText(text).setFontSize(24).setFontColor('#c00');
         this.appendChild(this.angleText_2);
        this.angleText_2.setText(text);
    }

    hockey.TriangleShape.prototype.setAngleText_3 = function(text)
    {
        this.angleText_3 = new lime.Label().setPosition(p5 +20, p6 - 20).setText(text).setFontSize(24).setFontColor('#c00');
         this.appendChild(this.angleText_3);
        this.angleText_3.setText(text);
    }

    hockey.TriangleShape.prototype.setAngleText_3 = function(text)
    {
        this.angleText_3 = new lime.Label().setPosition(p5 + 50, p6 - 20).setText(text).setFontSize(24).setFontColor('#c00');
         this.appendChild(this.angleText_3);
        this.angleText_3.setText(text);
    }


    hockey.TriangleShape.prototype.setAngleText_4 = function(text)
    {
        this.angleText_4 = new lime.Label().setPosition(p5 +65, p6 - 20).setText(text).setFontSize(24).setFontColor('#c00');
         this.appendChild(this.angleText_4);
        this.angleText_4.setText(text);
    }

    hockey.TriangleShape.prototype.updateAngleText_3 = function(text)
    {

        this.angleText_3.setText(text);
    }

    hockey.TriangleShape.prototype.updateAngleText_4 = function(text)
    {

        this.angleText_4.setText(text);
    }

    hockey.TriangleShape.prototype.getAngleText_3 = function()
    {

        return this.angleText_3.getText();
    }

    hockey.TriangleShape.prototype.getAngleText_4 = function()
    {

        return this.angleText_4.getText();
    }
}

goog.inherits(hockey.TriangleShape, lime.Polygon) 



