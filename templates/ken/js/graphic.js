/// Modified from http://rectangleworld.com/demos/MorphingCurve/MorphingCurve_RadialGradient.html 

// RAF polyfill
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

//for debug messages while testing code
var Debugger = function() { };
Debugger.log = function(message) {
	try {
		console.log(message);
	}
	catch (exception) {
		return;
	}
}

var windowLoadHandler = function () {
	var graphicsLoaded = false;

	// if scrolled down at least once, run the animation
    window.addEventListener('scroll', function () {
		if (!graphicsLoaded) {
			graphicsLoaded = true;
			createGrowingCanvasGraphic("displayCanvas", window.innerWidth, window.innerHeight);
		}
	});
}

var createGrowingCanvasGraphic = function (id, width, height, orientation = "horizontal") {
    document.querySelector('html').attributes.class = "js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths gr__rectangleworld_com";
    var div = document.createElement('div');
    div.innerHTML = '<canvas id="' + id + '" width="' + width + '" height="' + height + '">';
    document.querySelector('body').appendChild(div.firstChild);

	canvasApp(id, width, height, orientation);
}

var canvasSupport = function () {
	return Modernizr.canvas;
}

var canvasApp = function (id, displayWidth = window.innerWidth, displayHeight = window.innerHeight, orientation) {
	if (!canvasSupport()) {
		return;
	}
	
	var displayCanvas = document.getElementById(id);
	var context = displayCanvas.getContext("2d");
	
	//off screen canvas used only when exporting image
	var exportCanvas = document.createElement('canvas');
	exportCanvas.width = displayWidth;
	exportCanvas.height = displayHeight;
	var exportCanvasContext = exportCanvas.getContext("2d");
	
	//var exportImage = document.createElement('img');
	
	//buttons
	// var btnExport = document.getElementById("btnExport");
	// btnExport.addEventListener("click", exportPressed, false);
	
	// var btnRegenerate = document.getElementById("btnRegenerate");
	// btnRegenerate.addEventListener("click", regeneratePressed, false);
	
	var numCircles;
	var maxMaxRad;
	var minMaxRad;
	var minRadFactor;
	var circles;
	var iterations;
	var timer;
	var drawsPerFrame;
	var drawCount;
	var bgColor,urlColor;
	var TWO_PI = 2*Math.PI;
	var lineWidth;
	
	var stop = false;
	var frameCount = 0;
	var fps, fpsInterval, startTime, now, then, elapsed;

	function startAnimating(fps) {
		fpsInterval = 1000 / fps;
		then = Date.now();
		startTime = then;
		console.log(startTime);
		animate();
	}


	function animate() {

		// stop
		if (stop) {
			return;
		}

		// request another frame

		requestAnimationFrame(animate);

		// calc elapsed time since last loop

		now = Date.now();
		elapsed = now - then;

		// if enough time has elapsed, draw the next frame

		if (elapsed > fpsInterval) {

			// Get ready for next frame by setting then=now, but...
			// Also, adjust for fpsInterval not being multiple of 16.67
			then = now - (elapsed % fpsInterval);

			// draw stuff here
			draw();

			// TESTING...Report #seconds since start and achieved fps.
			// var sinceStart = now - startTime;
			// var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
			// $results.text("Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.");

		}
	}

	init();
	
	function init() {
		/*
		In other experiments, you may wish to use more fractal curves ("circles")
		and allow the radius of them to vary. If so, modify the next three variables.
		*/
		numCircles = 1;
		maxMaxRad = 200;
		minMaxRad = 200;
		
		/*
		We draw closed curves with varying radius. The factor below should be set between 0 and 1,
		representing the size of the smallest radius with respect to the largest possible.
		*/ 
		minRadFactor = 0;
		
		/*
		The number of subdividing steps to take when creating a single fractal curve. 
		Can use more, but anything over 10 (thus 1024 points) is overkill for a moderately sized canvas.
		*/
		iterations = 8;
		
		//number of curves to draw on every tick of the timer
		drawsPerFrame = 4;
		
		bgColor = "#FFFFFF";
		urlColor = "#EEEEEE";
		
		lineWidth = 1.01;

		drawCount = 0;
		context.setTransform(1,0,0,1,0,0);
		
		context.clearRect(0,0,displayWidth,displayHeight);
		
		setCircles();
		
        startAnimating(10);
	}
	
    function animLoop( render, element ) {
        var running, lastFrame = +new Date,
            raf = window.mozRequestAnimationFrame    ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame     ||
                window.oRequestAnimationFrame;
        function loop( now ) {
            // stop the loop if render returned false
            if ( running !== false ) {
                raf( loop, element );
                var deltaT = now - lastFrame;
                if ( deltaT < 160 ) {
                    running = render( deltaT );
                }
                lastFrame = now;
            }
        }
        loop( lastFrame );
    }
	
	function setCircles() {
		var i;
		var r,g,b,a;
		var maxR, minR;
		var grad;
		
		circles = [];
		
		for (i = 0; i < numCircles; i++) {
			maxR = minMaxRad+Math.random()*(maxMaxRad-minMaxRad);
			minR = minRadFactor*maxR;
			
			//define gradient
            /// BLUE
			// grad = context.createRadialGradient(0,0,minR,0,0,maxR);
			// grad.addColorStop(1,"rgba(0,170,200,0.2)");
			// grad.addColorStop(0,"rgba(0,20,170,0.2)");

            /// BLUE WITH PURPLE
			grad = context.createRadialGradient(0,0,0.9*minR,0,0,0.9*maxR);
			grad.addColorStop(1,"rgba(0,100,200,0.2)");
			grad.addColorStop(0.5,"rgba(200,0,200,0.2)");
			grad.addColorStop(0,"rgba(200,0,0,0.2)");
			
			var newCircle = {
				centerX: -maxR,
				centerY: displayHeight/2-50,
				maxRad : maxR,
				minRad : minR,
				color: grad, //can set a gradient or solid color here.
				//fillColor: "rgba(0,0,0,1)",
				param : 0,
				changeSpeed : 1/250,
				phase : Math.random()*TWO_PI, //the phase to use for a single fractal curve.
				globalPhase: Math.random()*TWO_PI //the curve as a whole will rise and fall by a sinusoid.
				};
			circles.push(newCircle);
			newCircle.pointList1 = setLinePoints(iterations);
			newCircle.pointList2 = setLinePoints(iterations);
		}
	}
	
	function draw() {
        //timer = setTimeout(function() {
            var i,j;
            var c;
            var rad;
            var point1,point2;
            var x0,y0;
            var cosParam;
            
            var xSqueeze = 0.75; //cheap 3D effect by shortening in x direction.
            
            var yOffset;
            
            //draw circles
            for (j = 0; j < drawsPerFrame; j++) {
                
                drawCount++;
                
                for (i = 0; i < numCircles; i++) {
                    c = circles[i];
                    c.param += c.changeSpeed;
                    if (c.param >= 1) {
                        c.param = 0;
                        
                        c.pointList1 = c.pointList2;
                        c.pointList2 = setLinePoints(iterations);
                    }
                    cosParam = 0.5-0.5*Math.cos(Math.PI*c.param);
                    
                    context.strokeStyle = c.color;
                    context.lineWidth = lineWidth;
                    //context.fillStyle = c.fillColor;
                    context.beginPath();
                    point1 = c.pointList1.first;
                    point2 = c.pointList2.first;
                    
                    //slowly rotate
                    c.phase += 0.0002;
                    
                    theta = c.phase;
                    rad = c.minRad + (point1.y + cosParam*(point2.y-point1.y))*(c.maxRad - c.minRad);
                    
                    //move center
                    c.centerX += 0.5;
                    c.centerY += 0.04;
                    yOffset = 40*Math.sin(c.globalPhase + drawCount/1000*TWO_PI);
                    //stop when off screen
                    if (c.centerX > displayWidth + maxMaxRad) {
                        // clearTimeout(timer);
                        // timer = null;
						return;
                    }
                    
                    //we are drawing in new position by applying a transform. We are doing this so the gradient will move with the drawing.
                    context.setTransform(xSqueeze,0,0,1,c.centerX,c.centerY+yOffset)
                    
                    //Drawing the curve involves stepping through a linked list of points defined by a fractal subdivision process.
                    //It is like drawing a circle, except with varying radius.
                    x0 = xSqueeze*rad*Math.cos(theta);
                    y0 = rad*Math.sin(theta);
                    context.lineTo(x0, y0);
                    while (point1.next != null) {
                        point1 = point1.next;
                        point2 = point2.next;
                        theta = TWO_PI*(point1.x + cosParam*(point2.x-point1.x)) + c.phase;
                        rad = c.minRad + (point1.y + cosParam*(point2.y-point1.y))*(c.maxRad - c.minRad);
                        x0 = xSqueeze*rad*Math.cos(theta);
                        y0 = rad*Math.sin(theta);
                        context.lineTo(x0, y0);
                    }
                    context.closePath();
                    context.stroke();
                    //context.fill();		
                        
                }
            }
        //}, 1000 / 15);    
        requestAnimationFrame(draw);        
	}
		
	//Here is the function that defines a noisy (but not wildly varying) data set which we will use to draw the curves.
	function setLinePoints(iterations) {
		var pointList = {};
		pointList.first = {x:0, y:1};
		var lastPoint = {x:1, y:1}
		var minY = 1;
		var maxY = 1;
		var point;
		var nextPoint;
		var dx, newX, newY;
		var ratio;
		
		var minRatio = 0.5;
				
		pointList.first.next = lastPoint;
		for (var i = 0; i < iterations; i++) {
			point = pointList.first;
			while (point.next != null) {
				nextPoint = point.next;
				
				dx = nextPoint.x - point.x;
				newX = 0.5*(point.x + nextPoint.x);
				newY = 0.5*(point.y + nextPoint.y);
				newY += dx*(Math.random()*2 - 1);
				
				var newPoint = {x:newX, y:newY};
				
				//min, max
				if (newY < minY) {
					minY = newY;
				}
				else if (newY > maxY) {
					maxY = newY;
				}
				
				//put between points
				newPoint.next = nextPoint;
				point.next = newPoint;
				
				point = nextPoint;
			}
		}
		
		//normalize to values between 0 and 1
		if (maxY != minY) {
			var normalizeRate = 1/(maxY - minY);
			point = pointList.first;
			while (point != null) {
				point.y = normalizeRate*(point.y - minY);
				point = point.next;
			}
		}
		//unlikely that max = min, but could happen if using zero iterations. In this case, set all points equal to 1.
		else {
			point = pointList.first;
			while (point != null) {
				point.y = 1;
				point = point.next;
			}
		}
		
		return pointList;		
	}
		
	function exportPressed(evt) {
		//background - otherwise background will be transparent.
		exportCanvasContext.fillStyle = bgColor;
		exportCanvasContext.fillRect(0,0,displayWidth,displayHeight);
		
		//draw
		exportCanvasContext.drawImage(displayCanvas, 0,0,displayWidth,displayHeight,0,0,displayWidth,displayHeight);
		
		//add printed url to image
		exportCanvasContext.fillStyle = urlColor;
		exportCanvasContext.font = 'bold italic 16px Helvetica, Arial, sans-serif';
		exportCanvasContext.textBaseline = "top";
		var metrics = exportCanvasContext.measureText("rectangleworld.com");
		exportCanvasContext.fillText("rectangleworld.com", displayWidth - metrics.width - 10, 5);
		
		//we will open a new window with the image contained within:		
		//retrieve canvas image as data URL:
		var dataURL = exportCanvas.toDataURL("image/png");
		//open a new window of appropriate size to hold the image:
		var imageWindow = window.open("", "fractalLineImage", "left=0,top=0,width="+displayWidth+",height="+displayHeight+",toolbar=0,resizable=0");
		//write some html into the new window, creating an empty image:
		imageWindow.document.write("<title>Export Image</title>")
		imageWindow.document.write("<img id='exportImage'"
									+ " alt=''"
									+ " height='" + displayHeight + "'"
									+ " width='"  + displayWidth  + "'"
									+ " style='position:absolute;left:0;top:0'/>");
		imageWindow.document.close();
		//copy the image into the empty img in the newly opened window:
		var exportImage = imageWindow.document.getElementById("exportImage");
		exportImage.src = dataURL;
	}	
}

window.addEventListener("load", windowLoadHandler, false);