console.log('This is a timer application');
var i;
for (i = 1; i <= 60; i++){
    print(i);
}

function print(i) {
    setTimeout(function(){
        console.log(i)
    },i*1000);
}