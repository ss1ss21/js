var fs = require("fs");
var path = require("path");

exports.myDateTime = function(){
    return Date();
  }

module.exports.login = function(req, res){
  fs.readFile('../login/login.html', function(err, data){
    res.write(data);
    res.end();
  });
}

module.exports.bnnck = function(req, res){
  res.sendFile(path.join(__dirname, '../bnnck/bnn.html'));

};

module.exports.homepage = function(req, res){
  res.sendFile(path.join(__dirname, '../homepage/entrPg.html'));
};

module.exports.cookies = function(req, res){
  res.sendFile(path.join(__dirname, '../cookies/cookies.html'));
};

module.exports.applck = function(req, res){
  res.sendFile(path.join(__dirname, 'applck.html'));
};