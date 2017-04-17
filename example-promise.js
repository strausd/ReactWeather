// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallback('Dallas', function (err, temp) {
//     if(err) {
//         console.log('error', err);
//     } else {
//         console.log('Success', temp)
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }
//
// getTempPromise('Dallas').then(function (temp) {
//     console.log("Success!", temp);
// }, function(err) {
//     console.log("Error.", err);
// });


function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if((typeof a === 'number') && (typeof b === 'number')) {
            resolve(a + b);
        } else {
            reject('Both must be numbers');
        }
    });
}

addPromise(8, 3).then(function (num) {
    console.log(num + " is the sum!");
}, function (err) {
    console.log(err);
});
