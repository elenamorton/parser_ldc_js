const chai = require('chai'); 
const expect = chai.expect; 

const App = require('../app/app');
let app = new App();

let inputStr = 'AAAc91%cWwWkLq$1ci3_848v3d__K';
let inputStrLower = 'aacccd91ee';
let inputStrUpper = 'AAACC91EE';
let inputStrMixedCase = 'AAAcc91EEff';

describe('App', () => {
    
    describe('removes duplicated characters from a string', () => {
        it('removes lower case letters', () => {
           expect(app.removeDuplicateChars(inputStrLower)).to.equal('acd91e'); 
        })
        
        it('removes upper case letters', () => {
           expect(app.removeDuplicateChars(inputStrUpper)).to.equal('AC91E'); 
        })
        
        it('removes mixed case letters', () => {
           expect(app.removeDuplicateChars(inputStrMixedCase)).to.equal('Ac91Ef'); 
        })
        
        
        
    })
})