
class App {
    
    removeDuplicateChars(str) {
        return str.replace(/(.)(?=\1)/g, "");
    }
    
    removeExtraChars(str, arrCharsToRemove) {
        var extraChars = '[' + arrCharsToRemove.join('') + ']';
        var re = new RegExp(extraChars, "g")
        return str.replace(re, "")
    }
}

module.exports=App;