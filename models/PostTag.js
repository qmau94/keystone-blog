var keystone = require('keystone');

// Tạo key
var PostTag = new keystone.List('PostTag', {
	autokey: { from: 'name', path: 'key', unique: true },
});

// Định nghĩa các trường của model
PostTag.add({
	name: { type: String, required: true },
});

// Định nghĩa quan hệ với các model khác
PostTag.relationship({ ref: 'Post', path: 'posts', refPath: 'tags' });

PostTag.register();
