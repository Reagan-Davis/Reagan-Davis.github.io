import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";




var colorWater = 'blue'
var colorLand = 'green'
var colorGraticule = '#ccc'
var colorBorder = '#000'
var colorCountry = 'red'

var wMap = 950;
var hMap = 500;

var landSVG = svgContainer.append("path").attr("d", geoPath(landFeatureCollection));