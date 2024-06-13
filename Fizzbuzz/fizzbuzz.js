var tts = 1;

while (tts !== 100) {
    if (((tts % 3)==0)&&((tts % 5)==0)){
        console.log("FizzBuzz")
        tts+=1;
    }
    else if ((tts % 5)==0){
        console.log("Fizz")
        tts+=1;
    }
    else if ((tts % 3)==0){
        console.log("Buzz")
    }
    console.log(tts);
    tts += 1;
}