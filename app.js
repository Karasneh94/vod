console.log('testing my first console.log');


var userName = prompt('Enter Your Name');
alert('Hello ' + userName + ', We have a gift for you at the end of the page 🎁');



var typeOfShow = prompt(userName+' Do you prefer Movies or Series?');

if (typeOfShow == 'movies' || typeOfShow == 'Movies')
{
    document.write('<br><h2>'+userName+ ', Here are the top 3 Movies of all time</h2><br>');
    showList = '<ol><li><h3>The Shawshank Redemption</h3></li><li><h3>The Godfather</h3></li><li><h3>the Dark Knight</h3></li></ol>';

}else if (typeOfShow == 'series' || typeOfShow == 'Series'){
    document.write('<br><h2>'+userName+ ', Here are the top 3 Series of all time</h2><br>');
    showList = '<ol><li><h3>Friends</h3></li><li><h3>HIMYM</h3></li><li><h3>Vikings</h3></li></ol>';

}else{
    showList = '<h1>GO WATCH ANIME</h1>'
}

var txt;
var userColor = confirm('One last thing '+userName+' , Would you like to see a light background of this page?');
if (userColor == true) {
    document.body.style.backgroundColor = "#f8f1f1";
} else {
    document.body.style.backgroundColor = "#88304e";
}

document.write(showList);








