

var arrayOfImages = [
{ 
	src: 'img/a/ASD.png',
	width: 400, 
	title: 'ASD', 
	caption: ''
},
{ 
	src: 'img/a/pic coffee haus.png',
	width: 400, 
	title: 'tertúlia', 
	caption: ''
},	
{ 
	src: 'img/a/creation_structure.jpg',
	width: 400, 
	title: 'Formal Map', 
	caption: 'estrutura formal do desenvolvimento de ideias'
},
{ 
	src: 'img/a/EAT.jpg',
	width: 400, 
	title: 'EAT', 
	caption: '1st page of publication'
}

];

var WAMImages = [
{ 
	src: 'img/b/WAMLogo.jpg',
	width: 400, 
	title: 'logo', 
	caption: ''
},
{ 
	src: 'img/b/WAM_model.jpg',
	width: 400, 
	title: 'Formal model', 
	caption: 'estrutura formal do algoritmo dos agentes'
},
{ 
	src: 'img/b/emergent1.jpg',
	width: 400, 
	title: 'emergent behavior', 
	caption: 'estado inicial da paisagem virtual'
},
{ 
	src: 'img/b/emergent2.jpg',
	width: 400, 
	title: 'emergent behavior', 
	caption: 'estado da paisagem virtual ao fim de algumas iterações'
},
{ 
	src: 'img/b/windagents1.jpg',
	width: 400, 
	title: 'WAM', 
	caption: 'still from instalation'
},
{ 
	src: 'img/b/windagents2.jpg',
	width: 400, 
	title: 'WAM', 
	caption: 'still from instalation'
}

];

var VAImages = [
{ 
	src: 'img/c/VALogo.jpg',
	width: 400, 
	title: 'logo', 
	caption: ''
},
{ 
	src: 'img/c/VAcreature1.jpg',
	width: 400, 
	title: 'Formal model', 
	caption: 'estrutura formal do algoritmo dos agentes'
},
{ 
	src: 'img/c/VAcreature2.jpg',
	width: 400, 
	title: 'Formal model', 
	caption: 'estrutura formal do algoritmo dos agentes'
},
{ 
	src: 'img/c/diff.png',
	width: 400, 
	title: 'sistema de reacção-difusão', 
	caption: 'exemplo'
},
{ 
	src: 'img/c/virus.png',
	width: 400, 
	title: 'vírus', 
	caption: 'microscopia da estrutura cristalina'
},
{ 
	src: 'img/cScreen/FA1.jpg',
	width: 400, 
    title: 'FA', 
	caption: 'Screen Shot'
},
{ 
	src: 'img/cScreen/FA2.jpg',
	width: 400, 
    title: 'FA', 
	caption: 'Screen Shot'
},
{ 
	src: 'img/cScreen/FA3.jpg',
	width: 400, 
    title: 'FA', 
	caption: 'Screen Shot'
},
{ 
	src: 'img/cScreen/FA4.jpg',
	width: 400, 
    title: 'FA', 
	caption: 'Screen Shot'}

];

var MAImages = [
{ 
	src: 'img/d/1.jpg',
	width: 400, 
	title: 'logo', 
	caption: ''
},
{ 
	src: 'img/d/fungi1.png',
	width: 400, 
    title: 'hifas', 
	caption: 'estruturas filamentosas microscópicas de um fungo'
},
{ 
	src: 'img/d/fungi2.png',
	width: 400, 
    title: 'micélio', 
	caption: 'conjunto emaranhado de hifas'
},
{ 
	src: 'img/d/MAcreature.jpg',
	width: 400, 
    title: 'Formal model', 
	caption: 'estrutura formal do algoritmo dos agentes'
},
{ 
	src: 'img/dScreen/myc1a.jpg',
	width: 400, 
    title: 'MA', 
	caption: 'Screen Shot'
},
{ 
	src: 'img/dScreen/myc2a.jpg',
	width: 400, 
    title: 'MA', 
	caption: 'Screen Shot'
},
{ 
	src: 'img/dScreen/myc3a.jpg',
	width: 400, 
    title: 'MA', 
	caption: 'Screen Shot'
},
{ 
	src: 'img/dScreen/myc4a.jpg',
	width: 400, 
    title: 'MA', 
	caption: 'Screen Shot'
},
{ 
	src: 'img/dScreen/myc5a.jpg',
	width: 400, 
    title: 'MA', 
	caption: 'Screen Shot'
},

];




var gallery, galery1, galery2, galery3;
Event.observe(window, 'load', function() {
  gallery = new com.buzamoto.ImageShiftGallery.Gallery('gallery', arrayOfImages, 'middle' );
  });
Event.observe(window, 'load', function() {
  galery1 = new com.buzamoto.ImageShiftGallery.Gallery('gallery1', WAMImages, 'middle');
});
Event.observe(window, 'load', function() {
  galery2 = new com.buzamoto.ImageShiftGallery.Gallery('gallery2', VAImages, 'middle');
});
Event.observe(window, 'load', function() {
  galery3 = new com.buzamoto.ImageShiftGallery.Gallery('gallery3', MAImages, 'middle');
});


//galery1 = new com.buzamoto.ImageShiftGallery.Gallery('gallery1', arrayOfImages, 'middle' ,true,100);