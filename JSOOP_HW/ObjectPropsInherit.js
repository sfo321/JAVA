var someObj = {
    name: 'Asan',
    age: 45,
    zyrkeli: 'sini',
    ushi: 'zeleni'
};
var otherObj = {};

Object.keys(someObj).forEach(function(prop){
    console.log('Inheriting ' + prop);
    otherObj[prop] = someObj[prop];
});

console.log(otherObj);