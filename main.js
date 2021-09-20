function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        
        img = document.getElementById('cat');
        img1 = document.getElementById('dog');
        img2 = document.getElementById('lion');
        img3 = document.getElementById('rabbit');
        img4= document.getElementById('mouse');
        img5= document.getElementById('bear');
        img6= document.getElementById('wolf');

        if (results[0].label == "Clap") {
            img.src = 'cat.gif';
            img1.src = 'dog.gif';
            img2.src = 'lion.png';
            img3.src = 'rabbit.png';
            img3.src = 'mouse.png';
            img3.src = 'bear.png';
            img3.src = 'wolf.png';
        } else if (results[0].label == "Bell") {
            img.src = 'cat.png'
            img1.src = 'dog.png';
            img2.src = 'lion.gif';
            img3.src = 'rabbit.gif';
            img3.src = 'mouse.png';
            img3.src = 'bear.png';
            img3.src = 'wolf.png';
        } else if (results[0].label == "Snapping") {
            img.src = 'cat.png';
            img1.src = 'dog.png';
            img2.src = 'lion.png';
            img3.src = 'rabbit.png';
            img3.src = 'mouse.gif';
            img3.src = 'bear.gif';
            img3.src = 'wolf.png';
        }else{
            img.src = 'cat.png';
            img1.src = 'dog.png';
            img2.src = 'lion.png';
            img3.src = 'rabbit.png';
            img3.src = 'mouse.png';
            img3.src = 'bear.png';
            img3.src = 'wolf.gif';
        }
    }
}
