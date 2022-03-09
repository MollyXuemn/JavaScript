(function(){
    //引用局部变量
    var n = "Another Private Name";
    function Person(name){
        var _this = {};
        _this.name = name;
        _this.sayHello = function(){
            alert("PHello" + _this._name+ n);
        }
        return _this; 
    }
    window.Person = Person;
}());

function Teacher(name){
    //覆写父类中的对象 Peson()
    var _this = Person(name);
    //也想调用父类中的方法
    var superSay = _this.sayHello;
    //覆写父类中的方法
    _this.sayHello = function(){
        superSay.call(_this);
        alert("Thello"+_this.name);
    }
    return _this;
} 

var t = Teacher("Molly");
t.sayHello();
