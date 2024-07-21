var a = [];
 
function addValue(value) {
    if (a.length >= 3) {
        a.pop();  // Remove the last item
    }
    a.unshift(value);  // Add the new value to the beginning
}
 
addValue('first');  // a = ['first']
addValue('second'); // a = ['second', 'first']
addValue('third');  // a = ['third', 'second', 'first']
addValue('fourth'); // a = ['fourth', 'third', 'second'] ('first' is removed)
