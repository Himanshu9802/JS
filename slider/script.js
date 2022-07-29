    {/* // Airpod Image */}
    let airpodpro = document.getElementById('pro');
    let airpod3 = document.getElementById('3');

    let airpodspro = "images/airpodspro.png";
    let airpods3 = "images/airpods3.png";

    airpodpro.addEventListener('click', function(){
        document.getElementById('airpodIMG').src=airpodspro
    });

    airpod3.addEventListener('click', function(){
        document.getElementById('airpodIMG').src=airpods3
    });


    {/* // Watch Image */}
    let watch1 = document.getElementById('watch1');
    let watch2 = document.getElementById('watch2');

    let watch1img = "images/iwatch.png";
    let watch2img = "images/iwatch7.png";

    watch1.addEventListener('click', function(){
        document.getElementById('watchIMG').src=watch1img
    });

    watch2.addEventListener('click', function(){
        document.getElementById('watchIMG').src=watch2img
    });
