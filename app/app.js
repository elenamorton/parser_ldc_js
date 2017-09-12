const OUTPUT_SIZE = 15;
const DOLLAR = '$';
const POUND = '£'
const OTHER_CHARS_TO_REMOVE = [4, '_'];

class App {
    
    removeDuplicateChars(str) {
        return str.replace(/(.)(?=\1)/g, "");
    }
    
    removeExtraChars(str, arrCharsToRemove) {
        var extraChars = '[' + arrCharsToRemove.join('') + ']';
        var re = new RegExp(extraChars, "g")
        return str.replace(re, "")
    }
    
    replaceChars(str, charToBeChanged, charThatChange) {
        var re = new RegExp('[' + charToBeChanged + ']', "g");
        return str.replace(re, charThatChange)
    }
    
    processInputStr(str) {
        
    }
    
    static get OUTPUT_SIZE() {
        return OUTPUT_SIZE;
    }
    
}

module.exports=App;