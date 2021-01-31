console.log('testing my first console.log');


var userName = prompt('Enter Your Name');
alert('Hello ' + userName + ', We have a gift for you at the end of the page 🎁');


function showType(name) {
    
    var typeOfShow = prompt(name+', Do you prefer Movies or Series?');
    
    while(typeOfShow !== 'movies' && typeOfShow !== 'series'){
        typeOfShow = prompt(name +', Trust me this will keep going forever if you dont answer with either movies or series')
    }
    
    if (typeOfShow == 'movies' || typeOfShow == 'Movies')
    {
        document.write('<br><h2>'+name+ ', Here are the top 3 Movies of all time</h2><br>');
        showList = '<ol><li><h3>The Shawshank Redemption</h3></li><li><h3>The Godfather</h3></li><li><h3>the Dark Knight</h3></li></ol>';
    
    }else if (typeOfShow == 'series' || typeOfShow == 'Series'){
        document.write('<br><h2>'+name+ ', Here are the top 3 Series of all time</h2><br>');
        showList = '<ol><li><h3>Friends</h3></li><li><h3>HIMYM</h3></li><li><h3>Vikings</h3></li></ol>';
    
    }else{
        showList = '<h1>GO WATCH ANIME</h1>'
    }
}

showType(userName);


var feedback = prompt(userName+', How many random movie posters you wanna see?');


var userColor = confirm('One last thing '+userName+' , Would you like to see a light background of this page?');
if (userColor == true) {
    document.body.style.backgroundColor = "#f8f1f1";
} else {
    document.body.style.backgroundColor = "#88304e";
}

document.write(showList);
document.write('<br><hr>')

var imgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

function getRandomImage(imgAr) {
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + 'images/movies/' + img +'" width=200px >';
    document.write(imgStr);

}

for (var i = 0; i < feedback; i++) {
    
    getRandomImage(imgArray);
    
}














