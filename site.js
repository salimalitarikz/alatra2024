// functions 

function qs(query) {
    return document.querySelector(query);
    
}

setTimeout(() => {
    qs("#load_page").style.opacity = "0";
}, 2600);


document.querySelectorAll(".page_link").forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        var target = anchor.getAttribute("href");  // Bağlantının hedef URL'sini al
        if (target) {
            qs("#load_page").classList.add("load_before");
            qs("#menu").style.opacity = "0";

            setTimeout(function(){
                window.location.href = target;  // 2 saniye sonra yönlendirme
            }, 300);  // 2000 ms = 2 saniye gecikme
        }
    });
});


function projectStartToggle(){
    qs("#project_form").classList.toggle("proj_active");
    setTimeout(() => {
        qs("#project_form").classList.add("proj_phase_2");
    }, 3500);
}



function menuToggle() {
    let menu = document.getElementById("menu");
    let main = document.getElementById("main");

    menu.classList.toggle("menu_active");
    // main.classList.toggle("main_disabled");
    // qs("#body").classList.toggle("dark");
}


setTimeout(() => {
    qs(".circle-large").classList.remove("passive");
}, 1600);



// const snapValues = [3700,3800,3900,4000,4100,4200]; // Birden fazla snap noktası
const snapValues = [3700]; // Birden fazla snap noktası
const scrollPause = 500; // Duraklama süresi (ms)
let isPaused = false; // Duraklama kontrolü
let hasSnapped = Array(snapValues.length).fill(false); // Her snap için kontrol dizisi   


console.log(snapValues[snapValues.length-1]);
console.log(hasSnapped[1]);

if ((window.scrollY) > (snapValues[snapValues.length-1])) {

    snapValues.forEach((snapValue,index) => {
        console.log(index);
        hasSnapped[index] = true;
    });
}

function snapScroll(snapValue, index) {
    // Snap işlemleri
    if (!hasSnapped[index] && window.scrollY >= snapValue && !isPaused) {
        isPaused = true; // Duraklamayı başlat
        hasSnapped[index] = true; // Snap durumunu kaydet

        // Kaydırmayı geçici olarak durdur
        const currentScrollPosition = window.scrollY;
        qs("html").style.overflowY = 'hidden'; // Kaydırmayı geçici olarak kapat
        qs("html").scrollTop = currentScrollPosition; // Sabit konumda tut


        // Belirli bir süre sonra kaydırmayı yeniden aç
        setTimeout(() => {
            qs("html").style.overflowY = 'auto'; // Kaydırmayı yeniden aç
        isPaused = false; // Duraklamayı kapat
        // hasSnapped[index] = true; // Böylece kullanıcı geriye kaydırırsa tekrar çalışır
        }, scrollPause);
    }

    // Eğer pozisyon snap konumunu geçmişse ve isPaused değilse hasSnapped'i sıfırla
    if ((window.scrollY) < snapValue && !isPaused) {
        hasSnapped[index] = false; // Böylece kullanıcı geriye kaydırırsa tekrar çalışır
    }
}

window.addEventListener("scroll", (el) => {

    el.preventDefault();


    let scrollVal = window.scrollY;

    console.log("---> " + scrollVal);



    if (scrollVal > 100) {
        // qs("#globe_wrapper").classList.add("passive");
    }else{
        // qs("#globe_wrapper").classList.remove("passive");        
    }

    // question appears then becomes white colored
    if (scrollVal > 1370) {
        qs("#main").classList.add("dark");
    }else{
        qs("#main").classList.remove("dark");        
    }
    
    if (scrollVal > 4500) {
        qs("#main").classList.add("white");
    }else{
        qs("#main").classList.remove("white");        
    }
    

    if(scrollVal > 4150){
        qs("#part_5_progress_bar").style.height = "97.5vh";
        qs("#part_5_c_6").classList.add("active");
        qs("#part_5_c_5").classList.add("active");
        qs("#part_5_c_4").classList.add("active");
        qs("#part_5_c_3").classList.add("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if (scrollVal > 4050) {
        qs("#part_5_progress_bar").style.height = "82.5vh";
        qs("#part_5_c_6").classList.remove("active");
        qs("#part_5_c_5").classList.add("active");
        qs("#part_5_c_4").classList.add("active");
        qs("#part_5_c_3").classList.add("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if (scrollVal > 3950) {
        qs("#part_5_progress_bar").style.height = "67.5vh";
        qs("#part_5_c_5").classList.remove("active");
        qs("#part_5_c_4").classList.add("active");
        qs("#part_5_c_3").classList.add("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if(scrollVal > 3850){
        qs("#part_5_progress_bar").style.height = "52.5vh";
        qs("#part_5_c_4").classList.remove("active");
        qs("#part_5_c_3").classList.add("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if(scrollVal > 3750){
        qs("#part_5_progress_bar").style.height = "37.5vh";
        qs("#part_5_c_3").classList.remove("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if(scrollVal > 3650){
        qs("#part_5_progress_bar").style.height = "22.5vh";
        qs("#part_5_c_2").classList.remove("active");
        qs("#part_5_c_1").classList.add("active");
    }else{
        qs("#part_5_progress_bar").style.height = "7.5vh";
        qs("#part_5_c_1").classList.remove("active");
    }
    
    // if(scrollVal > 4150){
    //     qs("#part_5_progress_bar").style.height = "90%";
    //     qs("#part_5_c_6").classList.add("active");
    // }else{
    //     qs("#part_5_progress_bar").style.height = "75%";
    //     qs("#part_5_c_6").classList.remove("active");
    // }

    // if (scrollVal > 4050) {
    //     qs("#part_5_progress_bar").style.height = "75%";
    //     qs("#part_5_c_5").classList.add("active");
    // }else{
    //     qs("#part_5_progress_bar").style.height = "60%";
    //     qs("#part_5_c_5").classList.remove("active");
    // }
    

    // if (scrollVal > 3950) {
    //     qs("#part_5_progress_bar").style.height = "60%";
    //     qs("#part_5_c_4").classList.add("active");
    // }else{
    //     qs("#part_5_progress_bar").style.height = "45%";
    //     qs("#part_5_c_4").classList.remove("active");
    // }

    // if(scrollVal > 3850){
    //     qs("#part_5_progress_bar").style.height = "45%";
    //     qs("#part_5_c_3").classList.add("active");
    // }else{
    //     qs("#part_5_progress_bar").style.height = "30%";
    //     qs("#part_5_c_3").classList.remove("active");
    // }

    // if(scrollVal > 3750){
    //     qs("#part_5_progress_bar").style.height = "30%";
    //     qs("#part_5_c_2").classList.add("active");
    // }else{
    //     qs("#part_5_progress_bar").style.height = "15%";
    //     qs("#part_5_c_2").classList.remove("active");
    // }
   
    // if(scrollVal > 3650){
    //     qs("#part_5_progress_bar").style.height = "15%";
    //     qs("#part_5_c_1").classList.add("active");
    // }else{
    //     qs("#part_5_progress_bar").style.height = "0%";
    //     qs("#part_5_c_1").classList.remove("active");
    // }
    
   
    if (!isPaused) { // Eğer duraklama yoksa
        snapValues.forEach((snapValue, index) => {
        snapScroll(snapValue, index);
        });
    }


});


function changeLanguage() {
    var elements = document.querySelectorAll('[data-en]');

    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = elements[i].dataset.en;
    }
}




// // Orijinal başlığı sakla
// let originalTitle = document.title;
// let interval;

// document.addEventListener("visibilitychange", function() {
//     if (document.hidden) {
//         // Sayfa görünmüyorsa başlığı değiştirecek mesajları ayarla
//         let messages = ["Tam & Kaliteli İş İçin","Alitra Studio"];
//         let messageIndex = 0;

//         // Başlık arasında geçiş yapmak için bir interval başlat
//         interval = setInterval(function() {
//             document.title = messages[messageIndex];
//             messageIndex = (messageIndex + 1) % messages.length;
//         }, 5000);  // Her bir saniyede başlığı değiştir
//     } else {
//         // Sayfa görünür hale geldiğinde intervali temizle ve orijinal başlığa dön
//         clearInterval(interval);
//         document.title = originalTitle;
//     }
// });



// // Mevcut sayfanın URL'sini değiştirmek, fakat tarayıcı geçmişini etkilemeden
// let yeniUrl = window.location.pathname.replace('.html', '');
// history.replaceState({}, '', yeniUrl);


// THREE JS

function RoundedBoxGeometry ( 
	width , 
	height , 
	depth , 
	radius, 
	radiusSegments
) {

	THREE.BufferGeometry.call( this );

	this.type = 'RoundedBoxGeometry';


	//validate params ===================================

	radiusSegments = !isNaN( radiusSegments ) ? Math.max( 1, Math.floor( radiusSegments ) ) : 1 ;

	width =  !isNaN(width)  ? width  : 1;
	height = !isNaN(height) ? height : 1;
	depth =  !isNaN(depth)  ? depth  : 1;

	radius = !isNaN(radius) ? radius : .15;

	radius = Math.min( radius , Math.min( width , Math.min( height , Math.min( depth ) ) ) / 2 );

	var edgeHalfWidth =  width / 2 - radius;
	var edgeHalfHeight = height / 2 - radius;
	var edgeHalfDepth =  depth / 2 - radius;


	//not sure why this is needed, for querying? ========

	this.parameters = {
		width: width , 
		height: height , 
		depth: depth , 
		radius: radius, 
		radiusSegments: radiusSegments
	};


	//calculate vertices count ==========================

	var rs1 =  radiusSegments + 1; //radius segments + 1 

	var totalVertexCount = ( rs1 * radiusSegments + 1 ) << 3; 


	//make buffers ======================================

	var positions = 	new THREE.BufferAttribute( new Float32Array( totalVertexCount * 3 ), 3 );
	
	var normals = 		new THREE.BufferAttribute( new Float32Array( totalVertexCount * 3 ), 3 );
	

	//some vars =========================================

	var 
		cornerVerts = [], 
		cornerNormals = [],
		normal = new THREE.Vector3(),
		vertex = new THREE.Vector3(),
		vertexPool = [],
		normalPool = [],
		indices = []
	;

	var
		lastVertex = rs1 * radiusSegments,
		cornerVertNumber = rs1 * radiusSegments + 1
	;

	doVertices();
	doFaces();
	doCorners();
	doHeightEdges();
	doWidthEdges();
	doDepthEdges()

	// calculate vert positions =========================

	function doVertices(){

		//corner offsets
		var cornerLayout = [
			new THREE.Vector3(  1 ,  1 ,  1 ),
			new THREE.Vector3(  1 ,  1 , -1 ),
			new THREE.Vector3( -1 ,  1 , -1 ),
			new THREE.Vector3( -1 ,  1 ,  1 ),
			new THREE.Vector3(  1 , -1 ,  1 ),
			new THREE.Vector3(  1 , -1 , -1 ),
			new THREE.Vector3( -1 , -1 , -1 ),
			new THREE.Vector3( -1 , -1 ,  1 )
		];

		//corner holder 
		for ( var j = 0 ; j < 8 ; j ++ ){

			cornerVerts.push([]); 
			cornerNormals.push([]); 

		}

		//construct 1/8 sphere ==============================

		var PIhalf = Math.PI / 2;

		var cornerOffset = new THREE.Vector3( edgeHalfWidth , edgeHalfHeight , edgeHalfDepth );

		for ( var y = 0; y <= radiusSegments; y ++ ) {

			var v = y / radiusSegments;

			var va = v * PIhalf; //arrange in 90 deg

			var cosVa = Math.cos( va ); //scale of vertical angle 

			var sinVa = Math.sin( va );

			if( y == radiusSegments ){

				vertex.set( 0 , 1 , 0 );

				var vert = vertex.clone().multiplyScalar( radius ).add( cornerOffset );
				
				cornerVerts[0].push( vert );

				vertexPool.push( vert );
				
				var norm = vertex.clone();

				cornerNormals[0].push( norm );

				normalPool.push( norm );

				continue; //skip row loop
			
			} 	

			for ( var x = 0; x <= radiusSegments; x ++ ) {

				var u = x / radiusSegments;

				var ha = u * PIhalf;

				//make 1/8 sphere points
				vertex.x = cosVa * Math.cos( ha );
				vertex.y = sinVa;
				vertex.z = cosVa * Math.sin( ha );

				//copy sphere point, scale by radius, offset by half whd
				var vert = vertex.clone().multiplyScalar( radius ).add( cornerOffset );

				cornerVerts[0].push( vert );

				vertexPool.push( vert );
				
				//sphere already normalized, just clone

				var norm = vertex.clone().normalize();
				cornerNormals[0].push( norm );
				normalPool.push( norm );

			}

		}

		//distribute corner verts ===========================

		for ( var i = 1 ; i < 8 ; i ++ ){

			for( var j = 0 ; j < cornerVerts[0].length ; j ++ ){

				var vert = cornerVerts[0][j].clone().multiply( cornerLayout[i] );

				cornerVerts[i].push( vert );
				
				vertexPool.push( vert );

				var norm = cornerNormals[0][j].clone().multiply( cornerLayout[i] );

				cornerNormals[i].push( norm );

				normalPool.push( norm );

			}

		}	

	}
	

	// weave corners ====================================

	function doCorners(){

		var indexInd = 0;


		var flips = [
			true,
			false,
			true,
			false,
			false,
			true,
			false,
			true
		];

		var lastRowOffset = rs1 * ( radiusSegments - 1 );

		for ( var i = 0 ; i < 8 ; i ++ ){

			var cornerOffset = cornerVertNumber * i;

			for ( var v = 0 ; v < radiusSegments - 1 ; v ++ ){

				var r1 = v * rs1; 		//row offset
				var r2 = (v + 1) * rs1; //next row

				for ( var u = 0 ; u < radiusSegments ; u ++ ){

					var u1 = u + 1;
					var a = cornerOffset + r1 + u;
					var b = cornerOffset + r1 + u1;
					var c = cornerOffset + r2 + u;
					var d = cornerOffset + r2 + u1;

					if( !flips[i] ){

						indices.push( a );
						indices.push( b );
						indices.push( c );

						indices.push( b );
						indices.push( d );
						indices.push( c );

					} else {

						indices.push( a );
						indices.push( c );
						indices.push( b );

						indices.push( b );
						indices.push( c );
						indices.push( d );

					}

				}

			}
			
			for ( var u = 0 ; u < radiusSegments ; u ++ ){

				var a = cornerOffset + lastRowOffset + u;
				var b = cornerOffset + lastRowOffset + u + 1;
				var c = cornerOffset + lastVertex;

				if( !flips[i] ){

					indices.push( a );
					indices.push( b );
					indices.push( c );

				} else {

					indices.push( a );
					indices.push( c );
					indices.push( b );

				}

			}

		}

	}
	

	//plates ============================================
	//fix this loop matrices find pattern something

	function doFaces(){

		//top
		var a = lastVertex;// + cornerVertNumber * 0;
		var b = lastVertex + cornerVertNumber;// * 1;
		var c = lastVertex + cornerVertNumber * 2;
		var d = lastVertex + cornerVertNumber * 3;

		indices.push( a );
		indices.push( b );
		indices.push( c );
		indices.push( a );
		indices.push( c );
		indices.push( d );

		//bottom
		a = lastVertex + cornerVertNumber * 4;// + cornerVertNumber * 0;
		b = lastVertex + cornerVertNumber * 5;// * 1;
		c = lastVertex + cornerVertNumber * 6;
		d = lastVertex + cornerVertNumber * 7;

		indices.push( a );
		indices.push( c );
		indices.push( b );
		indices.push( a );
		indices.push( d );
		indices.push( c );

		//left 
		a = 0;
		b = cornerVertNumber;
		c = cornerVertNumber * 4;
		d = cornerVertNumber * 5;

		indices.push( a );
		indices.push( c );
		indices.push( b );
		indices.push( b );
		indices.push( c );
		indices.push( d );

		//right 
		a = cornerVertNumber * 2;
		b = cornerVertNumber * 3;
		c = cornerVertNumber * 6;
		d = cornerVertNumber * 7;

		indices.push( a );
		indices.push( c );
		indices.push( b );
		indices.push( b );
		indices.push( c );
		indices.push( d );

		//front 
		a = radiusSegments;
		b = radiusSegments + cornerVertNumber * 3;
		c = radiusSegments + cornerVertNumber * 4;
		d = radiusSegments + cornerVertNumber * 7;

		indices.push( a );
		indices.push( b );
		indices.push( c );
		indices.push( b );
		indices.push( d );
		indices.push( c );

		//back 
		a = radiusSegments + cornerVertNumber;
		b = radiusSegments + cornerVertNumber * 2;
		c = radiusSegments + cornerVertNumber * 5;
		d = radiusSegments + cornerVertNumber * 6;

		indices.push( a );
		indices.push( c );
		indices.push( b );
		indices.push( b );
		indices.push( c );
		indices.push( d );

	}


	// weave edges ======================================

	function doHeightEdges(){

		for ( var i = 0 ; i < 4 ; i ++ ){

			var cOffset = i * cornerVertNumber;
			var cRowOffset = 4 * cornerVertNumber + cOffset;
			var needsFlip = i & 1 === 1;
			for ( var u = 0 ; u < radiusSegments ; u ++ ){

				var u1 = u + 1;
				var a = cOffset + u;
				var b = cOffset + u1;
				var c = cRowOffset + u;
				var d = cRowOffset + u1;

				if( !needsFlip ){

					indices.push( a );
					indices.push( b );
					indices.push( c );
					indices.push( b );
					indices.push( d );
					indices.push( c );

				} else {

					indices.push( a );
					indices.push( c );
					indices.push( b );
					indices.push( b );
					indices.push( c );
					indices.push( d );

				}

			}

		}

	}
	
	function doDepthEdges(){

		var cStarts = [ 0 , 2 , 4 , 6 ];
		var cEnds =   [ 1 , 3 , 5 , 7 ];
			
		for ( var i = 0 ; i < 4 ; i ++ ){

			var cStart = cornerVertNumber * cStarts[ i ];
			var cEnd =   cornerVertNumber * cEnds[ i ];

			var needsFlip = 1 >= i;

			for ( var u = 0 ; u < radiusSegments ; u ++ ){

				var urs1 =  u * rs1;
				var u1rs1 = (u+1) * rs1;

				var a = cStart + urs1;
				var b = cStart + u1rs1;
				var c = cEnd + urs1;
				var d = cEnd + u1rs1

				if( needsFlip ){

					indices.push( a );
					indices.push( c );
					indices.push( b );
					indices.push( b );
					indices.push( c );
					indices.push( d );

				} else {

					indices.push( a );
					indices.push( b );
					indices.push( c );
					indices.push( b );
					indices.push( d );
					indices.push( c );

				}

			}

		}

	}

	function doWidthEdges(){

		var end = radiusSegments - 1;

		var cStarts = [ 0 , 1 , 4 , 5 ];
		var cEnds =   [ 3 , 2 , 7 , 6 ];
		var needsFlip = [0,1,1,0];

		for ( var i = 0 ; i < 4 ; i ++ ){

			var cStart = cStarts[i] * cornerVertNumber;
			var cEnd = cEnds[i] * cornerVertNumber;
			

			for ( var u = 0 ; u <= end ; u ++ ){

				// var dInd = u != end ? radiusSegments + u * rs1 : cornerVertNumber - 1;

				var a = cStart + radiusSegments + u * rs1;
				var b = cStart + (u != end ? radiusSegments + (u + 1) * rs1 : cornerVertNumber - 1);

				var c = cEnd + radiusSegments + u * rs1;
				var d = cEnd + (u != end ? radiusSegments + (u + 1) * rs1 : cornerVertNumber - 1);

				if( !needsFlip[i] ){

					indices.push( a );
					indices.push( b );
					indices.push( c );
					indices.push( b );
					indices.push( d );
					indices.push( c );

				} 
				else {

					indices.push( a );
					indices.push( c );
					indices.push( b );
					indices.push( b );
					indices.push( c );
					indices.push( d );

				}

			}

		}

	}


	//fill buffers ======================================

	var index = 0;

	for ( var i = 0 ; i < vertexPool.length ; i ++ ){

		positions.setXYZ( 
			index , 
			vertexPool[i].x , 
			vertexPool[i].y , 
			vertexPool[i].z 
		);

		normals.setXYZ( 
			index , 
			normalPool[i].x , 
			normalPool[i].y , 
			normalPool[i].z 
		);

		index++;

	}

	this.setIndex( new THREE.BufferAttribute( new Uint16Array( indices ) , 1 ) );
	
	this.addAttribute( 'position', positions );
	
	this.addAttribute( 'normal', normals );
	
};

RoundedBoxGeometry.prototype = Object.create( THREE.BufferGeometry.prototype );
RoundedBoxGeometry.constructor = RoundedBoxGeometry;

class App {
  init() {
    this.ambientLightColor = '#ffffff';
    this.backgroundColor = '#43fa8e';
    this.spotLightColor = 0xffffff;
    this.gridSize = 40;
    this.col = this.gridSize
    this.row = this.gridSize;
    this.boxSize = 1;
    this.easing = Sine.easeInOut;
    this.gui = new dat.GUI();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.set(-20, 20, -20);
    this.odds = [];
    this.evens = [];

    this.addRenderer();

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.04;
    
    // document.body.style.cursor = "-moz-grabg";
    // document.body.style.cursor = "-webkit-grab";

    // this.controls.addEventListener("start", () => {
    //   requestAnimationFrame(() => {
    //     document.body.style.cursor = "-moz-grabbing";
    //     document.body.style.cursor = "-webkit-grabbing";
    //   });
    // });

    // this.controls.addEventListener("end", () => {
    //   requestAnimationFrame(() => {
    //     document.body.style.cursor = "-moz-grab";
    //     document.body.style.cursor = "-webkit-grab";
    //   });
    // });

    this.addAmbientLight();

    this.addSpotLight();

    this.animate();

    this.lightMaterialProps = {
      color: '#8b8b8b',
      emissive: '#4b3008',
    };

    this.darkMaterialProps = {
      color: '#ff2f00',
      emissive: '#000',
    };

    const roundedGeometry = new RoundedBoxGeometry(this.boxSize, this.boxSize, this.boxSize, .04, .4);

    this.darkMaterial = new THREE.MeshPhongMaterial(this.darkMaterialProps);
    this.lightMaterial = new THREE.MeshPhongMaterial(this.lightMaterialProps);

    const light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(0, 20, 0);
    light.castShadow = true;
    this.scene.add(light);

    const light1 = new THREE.PointLight(0x00ff00, 1, 100);
    light1.position.set(0, 20, 0);
    light1.castShadow = true;
    this.scene.add(light1);

    const light2 = new THREE.PointLight(0xff00ff, 1, 1000);
    light2.position.set(-50, 50, -20);
    this.scene.add(light2);

    this.addBoxes(roundedGeometry);

    this.animateOdds();

    TweenMax.delayedCall(1.5, this.animateEvens.bind(this));

    // this.addGUIControls();

    window.addEventListener('resize', this.onResize.bind(this));
  }

  addRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this.renderer.domElement);
  }

  addAmbientLight() {
    const light = new THREE.AmbientLight(this.ambientLightColor, 1);
    this.scene.add(light);
  }

  addSpotLight() {
    this.spotLight = new THREE.SpotLight(this.spotLightColor);
    this.spotLight.position.set(0, 500, 0);
    this.scene.add(this.spotLight);
  }

  addGUIControls() {
    const backgroundGUI = this.gui.addFolder('Background');
    backgroundGUI.addColor(this, 'backgroundColor').onChange((color) => {
      document.body.style.backgroundColor = color;
    });

    const tileGUI = this.gui.addFolder('Light Material');
    tileGUI.addColor(this.lightMaterialProps, 'color').onChange((color) => {
      this.lightMaterial.color = this.hexToRgbTreeJs(color);
    });

    tileGUI.addColor(this.lightMaterialProps, 'emissive').onChange((emissive) => {
      this.lightMaterial.emissive = this.hexToRgbTreeJs(emissive);
    });

    const tileGUIDark = this.gui.addFolder('Dark Material');
    tileGUIDark.addColor(this.darkMaterialProps, 'color').onChange((color) => {
      this.darkMaterial.color = this.hexToRgbTreeJs(color);
    });

    tileGUIDark.addColor(this.darkMaterialProps, 'emissive').onChange((emissive) => {
      this.darkMaterial.emissive = this.hexToRgbTreeJs(emissive);
    });
  }

  animateOdds() {
    this.animateBoxes(this.odds, this.animateOdds.bind(this));
  }

  animateEvens() {
    this.animateBoxes(this.evens, this.animateEvens.bind(this));
  }

//   animateBoxes(list, callback) {
//     for (let i = 0; i < list.length; i++) {
//       const element = list[i];



//       TweenMax.to(element.position, 1.5, { y: 3, ease: this.easing, yoyo: true, yoyoEase: this.easing, repeat: -1 });
//       TweenMax.to(element.rotation, .6, { z: '-=' + this.radians(180), delay: 1 + (i/1000) , ease: this.easing});
//     }

//     TweenMax.delayedCall(3, callback);
//   }

animateBoxes(list, callback) {
    const timeMultiplier = 1.5; // Süreyi artırmak için bir çarpan tanımlayın

    for (let i = 0; i < list.length; i++) {
        const element = list[i];

        TweenMax.to(element.position, 1.5 * timeMultiplier, { 
            y: 3, 
            ease: this.easing, 
            yoyo: true, 
            yoyoEase: this.easing, 
            repeat: -1 
        });
        
        TweenMax.to(element.rotation, 0.6 * timeMultiplier, { 
            z: '-=' + this.radians(180), 
            delay: (1 + (i / 1000)) * timeMultiplier, 
            ease: this.easing 
        });
    }

    // Sürenin orantılı artması için delayedCall zamanını da çarpan ile çarpıyoruz
    TweenMax.delayedCall(3 * timeMultiplier, callback);
}

  hexToRgbTreeJs(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255
    } : null;
  }

  radians(degrees) {
    return degrees * Math.PI / 180;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getMaterial() {
    const number = this.getRandomInt(0, this.gridSize*2);

    return number%2===0 ? this.lightMaterial : this.darkMaterial;
  }

  addBoxes(geometry) {
    for (let i = 0; i < this.col; i++) {
      for (let j = 0; j < this.row; j++) {
        const box = new THREE.Mesh(geometry, this.getMaterial());

        box.position.set((i * this.boxSize) + this.gridSize * -.5, 2, (j * this.boxSize) + this.gridSize * -.5);
        box.castShadow = true;
        box.receiveShadow = true;

        if ((i + j) % 2 === 0) {
          this.evens[this.evens.length] = box;
        } else {
          this.odds[this.odds.length] = box;
        }

        this.scene.add(box);
      }
    }
  }

  animate() {
    this.controls.update();

    this.renderer.render(this.scene, this.camera);
    
    requestAnimationFrame(this.animate.bind(this));
  }

  onResize() {
    const ww = window.innerWidth;
    const wh = window.innerHeight;

    this.camera.aspect = ww / wh;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(ww, wh);
  }
}

new App().init();