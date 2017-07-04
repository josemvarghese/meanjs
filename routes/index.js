// var express = require('express');
// var router = express.Router();


// router.get('/test',function(req,res,next) {
// 	res.render('index page');

// });


// module.exports = router;	

 module.exports = function(app) {

	var x = {  
   "glossary":{  
      "title":"example glossary",
      "GlossDiv":{  
         "title":"S",
         "GlossList":{  
            "GlossEntry":{  
               "ID":"SGML",
               "SortAs":"SGML",
               "GlossTerm":"Standard Generalized Markup Language",
               "Acronym":"SGML",
               "Abbrev":"ISO 8879:1986",
               "GlossDef":{  
                  "para":"A meta-markup language, used to create markup languages such as DocBook.",
                  "GlossSeeAlso":[  
                     "GML",
                     "XML"
                  ]
               },
               "GlossSee":"markup"
            }
         }
      }
   }
};

 app.get('/test', function(req, res) {
        res.json(x); // load the index.ejs file
    });

};