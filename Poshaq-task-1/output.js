const submission = async (client, dbName, collectionName, bucketSize) => {

    var _ = require('lodash');
    const mong = require('mongoose');
    const category = require('./schema');

    mong.connect("mongodb://admin:password1@ds133632.mlab.com:33632/poshaq", {
        useNewUrlParser: true
    });

    collectionName = [];
    category.
    find({}).
    cursor().
    on('data', function (doc) {
        collectionName.push(doc)
    }).
    on('end', function () {

        var grouped = _.mapValues(_.groupBy(collectionName, 'category'),
            clist => clist.map(ele => _.omit(ele, 'category')));

        a = [];
        for (o in grouped) {
            a.push(o);
        }

        answer = {};
        for (let i = 0; i < a.length; i++) {


            var finalArray = grouped[a[i]].map(function (obj) {
                return obj._id;
            });

            finalArray = _.chunk(finalArray, bucketSize);


            answer[a[i]] = finalArray;

        };

        ultimate_answer = [];
        console.log(answer);
        
        ultimate_answer[0] = answer;

        console.log(ultimate_answer);

    });

}

submission("mongodb://admin:password1@ds133632.mlab.com:33632/", "poshaq", 'category', 3);