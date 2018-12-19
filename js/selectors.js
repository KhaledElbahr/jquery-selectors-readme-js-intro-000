// declare your functions here...
function paragraphSelector () {
  return $('p');
}

function lastImageSelector () {
  return $('img:last')
}

function ninjaBabySelector () {
  return $('#baby-ninja')
}

function divSelector () {
  return $('.pics')
}

function firstListItem () {
  return $('#pic-list li:first-child')
}

$(document).on('keypress', function(key) {
  if (key.which == 13){
    alert('enter was pressed');
  }
});
