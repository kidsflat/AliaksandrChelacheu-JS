function Render() {}

Render.render = function (acсeptPlace, object, objectGenerator) {
    if(typeof objectGenerator.generate != "function"){
        throw new Error("error");
    }
    var generatedObject = objectGenerator.generate(object);
    acсeptPlace.appendChild(generatedObject);
}