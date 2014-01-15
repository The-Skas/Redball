var Entity = function(params){
	//private variables:
	this.x = params && params.x || 0; 
	this.y = params && params.y || 0;

	//is drawable?
	//is updateable?
	
}

//Shared Functions / Variables amongst all instances.
Entity.prototype.update = function() {
	console.log(this.x + " its x");
}
// Can implement multiple 
var EntityB = function() {
}

EntityB.prototype = new Entity();


var EntityC = function() {

}
//All instances of Entity :D
EntityC.prototype = new EntityB();