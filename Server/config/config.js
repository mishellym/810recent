var path = require('path'),                         //1
rootPath = path.normalize(__dirname +'/..'),        
env = process.env.NODE_ENV || 'developement';
//
//line 3 uses the configg based on development or node env varia

var config = {                                      //1
    developement:{
        root:rootPath,
        app:{ name:'ToDo'},
        port:5000,                                  //
        db: 'mongodb://127.0.0.1/todo-dev'
         },  
        
          test: {
            root: rootPath,
            app: {     name: 'ToDo'    },
            port: 4000,
            db: 'mongodb://127.0.0.1/todo-test'
        },
                                                    //1
         production: {    
                root: rootPath,    
                app: {name: 'ToDo'},    
                port: 80,                           //1
         db: 'mongodb://127.0.0.1/todo' 
        }
 };

module.exports = config[env];                       //1