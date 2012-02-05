$(document).ready(function () {
  $.jribbble.getShotsByPlayerId('itsthatguy', function (playerShots) {
    console.log(playerShots.shots[0].title)
    console.log(playerShots.shots[0].player.name)
    console.log(playerShots.shots[0].image_teaser_url)
    
    var html = [];
    shot = playerShots.shots[0];
    //html.push('<li><h3>' + shot.title + '</h3>');
    //html.push('<h4>by ' + shot.player.name + '</h4><a href="' + shot.url + '">');
    html.push('<a href="' + shot.url + '"><h2>Dribbble</h2>')
    html.push('<img src="' + shot.image_teaser_url + '" ');
    html.push('alt="' + shot.title + '"></a>');

    $('#dribbble').html(html.join(''));
  }, {page: 1, per_page: 10})
});