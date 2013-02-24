
function createTriangle()
{
     
}

function Triangle () {
    
    this.shape = new lime.Polygon(p1,p2,p3,p4,p5,p6).setStroke(1,'#ffffff');
    this.angleText_1;
    this.angleText_2;
    this.angleText_3;
    this.angleText_4;
    
    
    groundLayer.appendChild(this.shape);
   
     
    
}



Triangle.prototype.giveAngle = function  (x1, y1, x2, y2)
{
    var dx = x2 - x1;
    var dy = y2 - y1;
    var radian =  Math.atan2(dy,dx);
    var angle = radian * (180 / Math.PI);
    
   // this.angleText.setText(angle);
    return Math.round(angle);
}

Triangle.prototype.setAngleText_1 = function(text)
{
    this.angleText_1 = new lime.Label().setPosition(p3 + 20, p4 + 20).setText(point).setFontSize(24).setFontColor('#c00');
     groundLayer.appendChild(this.angleText_1);
    this.angleText_1.setText(text);
}

Triangle.prototype.setAngleText_2 = function(text)
{
    this.angleText_2 = new lime.Label().setPosition(p1 - 20, p2 + 20).setText(point).setFontSize(24).setFontColor('#c00');
     groundLayer.appendChild(this.angleText_2);
    this.angleText_2.setText(text);
}

Triangle.prototype.setAngleText_3 = function(text)
{
    this.angleText_3 = new lime.Label().setPosition(p5 +20, p6 - 20).setText(point).setFontSize(24).setFontColor('#c00');
     groundLayer.appendChild(this.angleText_3);
    this.angleText_3.setText(text);
}

Triangle.prototype.setAngleText_3 = function(text)
{
    this.angleText_3 = new lime.Label().setPosition(p5 +20, p6 - 20).setText(point).setFontSize(24).setFontColor('#c00');
     groundLayer.appendChild(this.angleText_3);
    this.angleText_3.setText(text);
}


Triangle.prototype.setAngleText_4 = function(text)
{
    this.angleText_4 = new lime.Label().setPosition(p5 +35, p6 - 20).setText(point).setFontSize(24).setFontColor('#c00');
     groundLayer.appendChild(this.angleText_4);
    this.angleText_4.setText(text);
}

Triangle.prototype.updateAngleText_3 = function(text)
{
    
    this.angleText_3.setText(text);
}

Triangle.prototype.updateAngleText_4 = function(text)
{
    
    this.angleText_4.setText(text);
}

Triangle.prototype.getAngleText_3 = function()
{
    
    return this.angleText_3.getText();
}

Triangle.prototype.getAngleText_4 = function()
{
    
    return this.angleText_4.getText();
}



 




