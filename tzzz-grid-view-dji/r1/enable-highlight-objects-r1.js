// 2014-12-29 ~ vA3C Authors ~ MIT License
// Sources:
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_draggablecubes.html
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_cubes.html

	var VH = VH || {};
	var intersected;

	VH.HighlightObjects = function( objects ) {

		var mouse = new THREE.Vector2();

		var raycaster = new THREE.Raycaster();

		renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );

		function onDocumentMouseMove( event ) {

			event.preventDefault();

			mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

			raycaster.setFromCamera( mouse, camera );

			var intersects = raycaster.intersectObjects( objects );

			if ( intersects.length > 0 ) {

				if ( intersected ) { 

					deHighlight( intersected );

				}

				if ( intersected != intersects[ 0 ].object ) {

					intersected = intersects[ 0 ].object;

					highlight( intersected );

				}

			} else {

				if ( intersected ) { 

					deHighlight( intersected );

				}

				intersected = null;

			}

		}

	}

	function highlight( mesh ) {

		if ( mesh.material.emissive ) {

			mesh.currentHex = mesh.material.emissive.getHex();
			mesh.material.emissive.setHex( 0xff0000 );

		} else if ( mesh.material.color ) {

			mesh.currentHex = mesh.material.color.getHex();
			mesh.material.color.setHex( 0xffff00 );

		}

		mesh.currentHeight = mesh.scale.y;
		mesh.scale.y = 1.5 *  mesh.scale.y;

//console.log( 'highlight', mesh.id );

	}

	function deHighlight( mesh ) {

		if ( mesh.material.emissive ) {

			mesh.material.emissive.setHex( mesh.currentHex );

		} else if ( mesh.material.color ) {

			mesh.material.color.setHex( mesh.currentHex );

		}

		mesh.scale.y = mesh.currentHeight;

//console.log( 'dehighlight', intersected.name );

	}


	// Enable every mesh in a scene to become draggable

	VH.enableDragObjects = function() {

		objectContainer = new THREE.Object3D();

		scene.add( objectContainer );

		var objects = [];

		app.scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

//console.log( 'child', child );

				objects.push( child );

			}

		} );

		for ( obj in objects) {

			objectContainer.add( objects[ obj ] );

		}

		var dragcontrols = new VH.DragObjects( objectContainer.children );

//		dragcontrols.onDragged = callback;

	}


