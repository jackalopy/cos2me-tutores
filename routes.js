var TutorialModel = require('./models/TutorialModel');

module.exports = function(app) {
    
    app.get('/', function(req, res) {
        TutorialModel.get(null, function (err, data) {
            res.render('index', {tutoriais : data});
        });
    });

    app.get('/tutoriais/:slug', function(req, res) {
        var slug = req.params.slug;
        TutorialModel.getOne(slug, function(err, data) {
            res.render("tutoriais.ejs", {tutorial : data});
        });
    });
}