$(document).ready(function(){

  // declaration of an object
  var cat = {
      id : 101,
      name : 'Diva',
      color : 'black',
      breed : 'Domestic house',
      behaviour : 'calm'
  };

  console.log(cat);
  // $('#result').html('<h1>' + cat + '</h1>');

  // $('#result').html('<br>' + cat.name)
  //             .append('<br>' + cat.breed)
  //             .append('<br>' + cat.color);

// array of objects

var cats = [
      {
        id : 101,
        name : 'Diva',
        color : 'black',
        breed : 'Domestic house',
        behaviour : 'calm',
        photo : 'diva.jpeg'
      },
      {
        id : 102,
        name : 'Frank',
        color : 'White',
        breed : 'Ragdoll',
        behaviour : 'Lazy',
        photo : 'frank.jpeg'
      },
      {
        id : 103,
        name : 'Prince',
        color : 'Brown',
        breed : 'Siamese',
        behaviour : 'Happy',
        photo : 'prince.jpeg'
      },
      {
        id : 104,
        name : 'Oscar',
        color : 'Silver',
        breed : 'Tabby',
        behaviour : 'Cuddly',
        photo : 'oscar.jpeg'
      },
      {
        id : 105,
        name : 'Onyx',
        color : 'Orange',
        breed : 'Tabby',
        behaviour : 'Angry',
        photo : 'onyx.jpeg'
      },
      {
        id : 106,
        name : 'Amy',
        color : 'Silver',
        breed : 'Long hair',
        behaviour : 'Loving',
        photo : 'amy.jpeg'
      }

];


//access properties of objects using index number
// $('#result').html('<br>' + cats[0].name)
//             .append('<br>' + cats[0].breed)
//             .append('<br>' + cats[0].color)
//             .append('<br>'+ '<br>' + cats[1].name)
//             .append('<br>' + cats[1].breed)
//             .append('<br>' + cats[1].color);
//



var i = 0;
for (i = 0 ; i < cats.length; i++){

  // $('#result').append('<div class="row clearfix border border-dark m-3 p-2">' +
  //
  //                     '<div class="col-md-6">' +
  //                     '<h1>' + cats[i].name +   '</h1>' +
  //                     '<br>' + '<h2>' + cats[i].breed + '</h2>' +
  //                     '<br>' + '<h3>' + cats[i].color + '</h3>' +
  //                     '<br>' + '<h3>' + cats[i].behaviour + '</h3>' +
  //
  //                     '</div>' +
  //
  //                     '<div class="col-md-6">' +
  //                       '<img src="images/' + cats[i].photo + '" alt=" ' + cats[i].breed + '" class="img-thumbnail" > ' +
  //                     '</div>' +
  //
  //                     '</div>'
  //
  // ); //append ends here

  //bootstrap cards to $display
  $('#result').append('<div class="row clearfix">' +
                        '<div class="col-md-6 mx-1 m-2">' +
                          '<div class="card text-dark mb-3" style="width: 18rem;">' +
                            '<img src="images/' + cats[i].photo + '" class="card-img-top" alt="' + cats[i].breed + '">' +
                            '<div class="card-body">' +
                            '<h2 class="card-title">'+ cats[i].name + '<br>' + cats[i].breed + '</h2>' +
                            '<p class="card-text">' +cats[i].color + '<br>' + cats[i].behaviour +
                            '</p>' +
                          '<button id=" ' + cats[i].id + ' " type="button" class="btn btn-light moreDetails " data-toggle="modal" data-target="#exampleModal">View more' + '</button>' +
                          '</div>' +
                        '</div>' +
                      '</div>'
                  ); //append ends here

} //end of for loop

$('.moreDetails').click(function(){
  $('#imageCat').text(' '); //clearing the content
  console.log(this.id);
  var i=0;
  for (i = 0; i < cats.length; i++) {
    if (parseInt(this.id) === cats[i].id) {
      console.log(cats[i].id, cats[i].name, cats[i].breed);
      $('#exampleModalLabel').text(cats[i].name);
      //append will keep adding to existing content, so clear if you want
        $('#imageCat').append('<img class="img-fluid" src="images/' + cats[i].photo + '" alt="'+  cats[i].breed +'"/>');


    } //end of if statement
  } //end of for statement
}); // end of moreDetails click event

}); //document.ready()
