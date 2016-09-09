function createObject(objectToCreate){
    function Constructor(){};
    Constructor.prototype = objectToCreate;
    return new Constructor();
}