
//自我执行function
(function(){
    var n = "ime"; //隐藏n
    function People(name){
        this._name = name;
    }
    //原型继承
    People.prototype.say = function(){
        alert("peo-hello" + this._name + n);
    }
    window.People = People;
}());

(function(){
    function Student(name){
        this._name = name;
    }
    
    //扩展
    Student.prototype = new People();
    //调用父类方法
    var superSay = Student.prototype.say;
    //覆盖父类的方法
    Student.prototype.say = function(){
        //调用父类方法
        superSay.call(this);
        //子类方法
        alert("student - Hello" + this._name+n);
    }
    window.Student = Student;
}());


var s = new Student("Davaid");
s.say()


/* function hello(){
    alert(n);
}
hello(); */