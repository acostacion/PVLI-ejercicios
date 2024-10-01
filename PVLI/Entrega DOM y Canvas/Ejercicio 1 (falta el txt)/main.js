window.onload = function () {
    var button = document.getElementById('summon');
    button.addEventListener('click', function () {
        console.log('An karanir thanagor');
        var img = new Image();
        img.src = 'https://pbs.twimg.com/media/FS2FTv7WUAAPta0.jpg';
        document.getElementById('ankisses').appendChild(img);
    });
};

