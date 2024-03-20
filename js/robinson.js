import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let geojson = {}

let context = d3.select('#robinson canvas')
  .node()
  .getContext('2d');
  
let projection = d3.geoEqualEarth()
  .scale(150);

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

  context.clearRect(0, 0, 950, 500);

  geojson.features.forEach(function(d) {
      context.beginPath();
      context.fillStyle = state.clickedLocation && d3.geoContains(d, state.clickedLocation) ? 'red' : '#eee';
      geoGenerator(d);
      context.fill();
  })

  context.lineWidth = 0.5;
  context.strokeStyle = '#000000';

  context.beginPath();
  geoGenerator({type: 'FeatureCollection', features: geojson.features})
  context.stroke();
  //context.fill();
}

// REQUEST DATA
// Formerly ne_50m_land.geojson
// 1936.json
d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json')
	.then(function(json) {
		geojson = json;
		initialise();
		update();
})

let mouseOver = function(d) {
d3.selectAll(".Country")
  .transition()
  .duration(200)
  .style("opacity", .5)
d3.select(this)
  .transition()
  .duration(200)
  .style("opacity", 1)
  .style("stroke", "black")
}

let mouseLeave = function(d) {
d3.selectAll(".Country")
  .transition()
  .duration(200)
  .style("opacity", .8)
d3.select(this)
  .transition()
  .duration(200)
  .style("stroke", "transparent")
}

// Append the SVG element.
content.append(svg.node())
.on("mouseover", mouseOver )
.on("mouseleave", mouseLeave );