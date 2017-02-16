export default function () {

	this.namespace = '/admin/api';

	this.get('/newsRecords', function (db) {
		return db.newsRecords.all();
	});
	this.get('/fullRecords/:id', function (db, request) {
		const id = request.params.id;
		return db.fullRecords.find(id);
	});
	this.put('/fullRecords/:id', function (db, request) {
		const id = request.params.id;
		console.log(id);
		return db.fullRecords.find(id);
	});
}
