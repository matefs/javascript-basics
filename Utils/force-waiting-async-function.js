// wrong 
(async function () {
    await setTimeout( () => { console.log('primeiro') },1000 )
    await console.log('segundo')
})();



// correct
(async function () {
    await new Promise(resolve => setTimeout( () => { console.log('\nprimeiro'); resolve(); },1000 ))
    await console.log('segundo')
})();