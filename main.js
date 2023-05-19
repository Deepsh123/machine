function gotResults(error,results) {
    console.log('Got result!');
}
function modelReady() {
classifier.classify(gotResults);
}
function startClassiffication() {
navigator.mediaDevices.getUserMedia({audio:true});
classifier.ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/08Eo_iPEw/model.json',modelReady);
}