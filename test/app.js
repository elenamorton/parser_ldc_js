const chai = require('chai'); 
const expect = chai.expect; 

const App = require('../app/app');
let app = new App();

let inputStr = 'AAAc91%cWwWkLq$1ci3_848v3d__K';
let inputStrLower = 'aacccd91ee';
let inputStrUpper = 'AAACC91EE'

describe('App', () => {
    
    describe('removes duplicated characters from a string', () => {
        it('removes lower case chars', () => {
           expect(app.removeDuplicateChars(inputStrLower)).to.equal('acd91e'); 
        })
        
        it('removes lower case chars', () => {
           expect(app.removeDuplicateChars(inputStrUpper)).to.equal('AC91E'); 
        })
        
    })
})