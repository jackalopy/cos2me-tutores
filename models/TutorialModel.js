var mongoose = require('mongoose');

var tutorialSchema = new mongoose.Schema({
	title: String,
	slug: {type: String, index: {unique: true}},
	tags: [String],
	categories: [String],
	body: String,
	autors: [String],
	data: { type: Date, default: Date.now },
	estimated_time: Number,
	estimated_price: Number,
	price: Number
});

var Tutorial = mongoose.model('Tutorial', tutorialSchema);

module.exports = {
	get: function (id, cb) {
		if(id)
			Tutorial.find({ slug: id }, function(err, data){
				if (err) 
					cb(err);
				cb(null, data);
			});
		else {
			Tutorial.find(function(err, data){
				if (err) 
					cb(err);
				cb(null, data);
			});
		}
	},

	getOne: function(id, cb) {
		Tutorial.findOne({ slug: id }, function(err, data){
			if (err) 
				cb(err);
			cb(null, data);
		});
	},

	create: function (cb) {
		var teste = new Tutorial({
			title : "PINTO",
			autors : ["Mano Ciro"],
			slug : "uhul"
		});

		teste.save(function(err){
			if (err) console.error(err);
				cb(null);
		});
	}
};

module.exports.create(function() {
	console.log("error");
});