// 2014-12-29 ~ vA3C Authors ~ MIT License
// Sources:
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_draggablecubes.html
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_cubes.html

	var VH = VH || {};
	var intersected;

	VH.DragObjects = function( objects ) {

		me = this;

		var mouse = new THREE.Vector2();
		var offset = new THREE.Vector3();


		var geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );
		var material = new THREE.MeshBasicMaterial( );
		var plane = new THREE.Mesh( geometry, material );
		plane.visible = false;
		scene.add( plane );

		renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
		renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
		renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );


//		parent.window.addEventListener( 'keyup', onKeyUp, false );

		function onKeyUp( event ) {
console.log( event );
		}

		function onDocumentMouseMove( event ) {

			event.preventDefault();

			mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

			var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 ).unproject( camera );

			var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

			if ( VH.selected ) {

				var intersects = raycaster.intersectObject( plane );

				VH.selected.position.copy( intersects[ 0 ].point.sub( offset ) );

				return;

			}

			var intersects = raycaster.intersectObjects( objects );

			if ( intersects.length > 0 ) {

				if ( intersected != intersects[ 0 ].object ) {

//					if ( intersected ) intersected.material.emissive.setHex( intersected.currentHex );

					if ( intersected ) {

						if ( intersected.material.emissive ) {

							intersected.material.emissive.setHex( intersected.currentHex );

						} else if ( intersected.material.color ) {

							deHighlight( intersected );

							intersected.material.color.setHex( intersected.currentHex );
							intersected.scale.y = intersected.currentHeight;

						}

					}

					intersected = intersects[ 0 ].object;
//					intersected.currentHex = intersected.material.emissive.getHex();
//					intersected.material.emissive.setHex( 0xff0000 );

					if ( intersected.material.emissive ) {

						intersected.currentHex = intersected.material.emissive.getHex();
						intersected.material.emissive.setHex( 0xff0000 );

					} else if ( intersected.material.color ) {

highlight( intersected )


					}

					plane.position.copy( intersected.position );

					plane.lookAt( camera.position );

				}

				document.body.style.cursor = 'pointer';

			} else {

//				if ( intersected ) intersected.material.emissive.setHex( intersected.currentHex );

//				if ( intersected && intersected.material.emissive ) intersected.material.emissive.setHex( intersected.currentHex );

/*
						if ( intersected && intersected.material.emissive ) {

							intersected.material.emissive.setHex( intersected.currentHex );

						} else if ( intersected && intersected.material.color ) {

							intersected.material.color.setHex( intersected.currentHex );

						}

				intersected = null;
*/

				document.body.style.cursor = 'auto';

			}

		}

		function onDocumentMouseDown( event ) {

			event.preventDefault();

			var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 ).unproject( camera );

			var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

			var intersects = raycaster.intersectObjects( objects );

			if ( intersects.length > 0 ) {

				controls.enabled = false;

				VH.selected = intersects[ 0 ].object;

				var intersects = raycaster.intersectObject( plane );

//				offset.copy( intersects[ 0 ].point ).sub( plane.position );

				document.body.style.cursor = 'move';

				controls.target = intersects[ 0 ].point;

				camera.lookAt( intersects[ 0 ].point );

			}

		}

		function onDocumentMouseUp( event ) {

			event.preventDefault();

			controls.enabled = true;

			if ( intersected ) {

				plane.position.copy( intersected.position );

				if ( me.onDragged ) {

					me.onDragged();

				}

				VH.lastSelected = VH.selected;

				VH.selected = null;

			}

			document.body.style.cursor = 'auto';

		}

	}


	function highlight( mesh ) {

		mesh.currentHex = mesh.material.color.getHex();
		mesh.currentHeight = mesh.scale.y;

		intersected.material.color.setHex( 0xffff00 );
		var s = intersected.scale;
		intersected.scale.y = 1.5 * s.y;

//console.log( 'highlight', intersected.name );

	}

	function deHighlight( mesh ) {

		mesh.material.color.setHex( mesh.currentHex );
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


