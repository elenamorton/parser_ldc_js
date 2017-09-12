const chai = require('chai'); 
const expect = chai.expect; 

const App = require('../app/app');
let app = new App();

let inputStr = 'AAAc91%cWwWkLq$1ci3_848v3d__K';
let inputStrLower = 'aacccd91ee';
let inputStrUpper = 'AAACC91EE';
let inputStrMixedCase = 'AAAcc91EEff';
let inputStrMixedAlternate = 'AaAcC91_EeFf';


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
        
        it('removes mixed case alternate letters', () => {
           expect(app.removeDuplicateChars(inputStrMixedAlternate)).to.equal(inputStrMixedAlternate); 
        })
        
        it('removes mixed chars', () => {
           expect(app.removeDuplicateChars(inputStr)).to.equal('Ac91%cWwWkLq$1ci3_848v3d_K'); 
        })
    })
    
    describe('removes extra characters like underscore/digit number/etc', () => {
        it('removes the specified digit value in a string', () => {
            expect(app.removeExtraChars(inputStrMixedAlternate, [9])).to.equal('AaAcC1_EeFf'); 
        })
        
        it('removes a set of mixed chars', () => {
            expect(app.removeExtraChars(inputStrMixedAlternate, [9, "_"])).to.equal('AaAcC1EeFf'); 
        })
        
    })
    
})