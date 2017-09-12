
class App {
    
    removeDuplicateChars(str) {
        return str.replace(/(.)(?=\1)/g, "")
    }
}

module.exports=App;