// Using function to create object
function studentRecord(name, id, password, noOfProjects){
    var newStudent = {};
    newStudent.name = name;
    newStudent.id = id;
    newStudent.password = password;
    newStudent.noOfProjects = noOfProjects;
    newStudent.getStudentname = function(){
        console.log(newStudent.name);
    }
    newStudent.getPassword = function(){
        return newStudent.password;
    }
    newStudent.getProjects = function(){
        return newStudent.noOfProjects;
    }
    newStudent.changePassword = function(){
        return newStudent.password;
    }
    newStudent.incrementProject = function(){
        return newStudent.noOfProjects+1;
    }
    newStudent.decrementProject = function(){
        return newStudent.noOfProjects-1;
    }
    return newStudent;
}

// Using Object.create

function studentRecord(name, id, password, noOfProjects){
    var newStudent = Object.create(getDetails);
    newStudent.name = name;
    newStudent.id = id;
    newStudent.password = password;
    newStudent.noOfProjects = noOfProjects;
    
    return newStudent;
}

var getDetails = {
    getStudentname : function(){
        console.log(this.name)
    },
    getPassword : function(){
        return this.password
    },
    getProjects : function(){
        return this.noOfProjects}
    ,
    changePassword : function(){
        return this.password}
    ,
    incrementProject : function(){
        return this.noOfProjects+1}
    ,
    decrementProject : function(){
        return this.noOfProjects-1
    },
}

//Using Pseudoclassical Way

function studentRecord(name, id, password, noOfProjects){
    var newStudent = Object.create(studentRecord.prototype);
    newStudent.name = name;
    newStudent.id = id;
    newStudent.password = password;
    newStudent.noOfProjects = noOfProjects;
    
    return newStudent;
}

studentRecord.prototype = {
    getStudentname : function(){
        console.log(this.name)
    },
    getPassword : function(){
        return this.password
    },
    getProjects : function(){
        return this.noOfProjects}
    ,
    changePassword : function(){
        return this.password}
    ,
    incrementProject : function(){
        return this.noOfProjects+1}
    ,
    decrementProject : function(){
        return this.noOfProjects-1
    },
}

// using new key word 

function studentRecord(name, id, password, noOfProjects){
    this.name = name;
    this.id = id;
    this.password = password;
    this.noOfProjects = noOfProjects;
}

studentRecord.prototype = {
    getStudentname : function(){
        console.log(this.name)
    },
    getPassword : function(){
        return this.password
    },
    getProjects : function(){
        return this.noOfProjects}
    ,
    changePassword : function(){
        return this.password}
    ,
    incrementProject : function(){
        return this.noOfProjects+1}
    ,
    decrementProject : function(){
        return this.noOfProjects-1
    },
}

// Using Class 

class Student{
    constructor(name, id, password, noOfProjects){
        this.name = name;
        this.id = id;
        this.password = password;
        this.noOfProjects = noOfProjects;
    }
    getStudentname = function(){
        console.log(this.name)
    }
    getPassword = function(){
        return this.password
    }
    getProjects = function(){
        return this.noOfProjects
    }
    changePassword = function(){
        return this.password
    }
    incrementProject = function(){
        return this.noOfProjects+1
    }
    decrementProject = function(){
        return this.noOfProjects-1
    }
}