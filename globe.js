let geojson = {};

let context = d3.select('#content canvas')
	.node()
	.getContext('2d');

let projection = d3.geoOrthographic()
	.scale(300)
	.rotate([30, -45]);

let geoGenerator = d3.geoPath()
	.projection(projection)
	.context(context);

let state = {
	clickedLocation: null
}

function handleClick(e) {
	let pos = d3.pointer(e, this)
	state.clickedLocation = projection.invert(pos)
	update();
}

function initialise() {
	d3.select('canvas')
		.on('click', handleClick);
}

function update() {
	context.clearRect(0, 0, 800, 400);

	geojson.features.forEach(function(d) {
		context.beginPath();
		context.fillStyle = state.clickedLocation && d3.geoContains(d, state.clickedLocation) ? 'red' : '#aaa';
		geoGenerator(d);
		context.fill();
	})
}

// REQUEST DATA
d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json')
	.then(function(json) {
		geojson = json;
		initialise();
		update();
	});

