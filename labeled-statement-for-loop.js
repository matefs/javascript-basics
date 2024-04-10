let word = 'word'

wordLoop: for (let iterator= 0 ; iterator < word.length ; iterator++){

    if(iterator == 1){
        continue wordLoop; // jump this letter, jump from 0 to 2 
    }
    console.log(`iterator has value: ${iterator} \n The letter is: ${word[iterator]}`)

}