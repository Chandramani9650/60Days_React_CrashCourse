let Rectangle = {
    length:24,
    width:12,
    area:function(){
        return this.length*this.width
    }
    ,
    perimeter:function(){
        return 2*( this.length+this.width)
    }
}
console.log("Area " + Rectangle.area());
console.log("Perimeter " + Rectangle.perimeter());