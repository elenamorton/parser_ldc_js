const OUTPUT_SIZE = 15;
const DOLLAR = '$';
const POUND = '£'
const OTHER_CHARS_TO_REMOVE = [4, '_'];
const DEFAULT_RESULT = '##@@$$__%__$$@@##';

class App {
    
    removeDuplicateChars(str) {
        return str.replace(/(.)(?=\1)/g, "");
    }
    
    removeExtraChars(str, arrCharsToRemove) {
        let extraChars = '[' + arrCharsToRemove.join('') + ']';
        let re = new RegExp(extraChars, "g")
        return str.replace(re, "")
    }
    
    replaceChars(str, charToBeChanged, charThatChange) {
        let re = new RegExp('[' + charToBeChanged + ']', "g");
        return str.replace(re, charThatChange)
    }
    
    processInputStr(str) {
        let removedDup;
        let removedExtras;
        let output;
        
        if (!!str) {
            removedDup = this.removeDuplicateChars(str);
        }
        
        if (!!removedDup) {
            removedExtras = this.removeExtraChars(removedDup, OTHER_CHARS_TO_REMOVE);
        }
        
        if (!!removedExtras) {
            output = this.replaceChars(removedExtras, DOLLAR, POUND);
        }

        if (!!output) {
            return output.length <= OUTPUT_SIZE ? output : output.slice(0, OUTPUT_SIZE)
        } else {
            return DEFAULT_RESULT
        }
        
    }
    
    static get OUTPUT_SIZE() {
        return OUTPUT_SIZE;
    }
    
    static get DEFAULT_RESULT() {
        return DEFAULT_RESULT;
    }
    
}

module.exports=App;