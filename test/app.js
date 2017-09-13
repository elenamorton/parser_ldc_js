const chai = require('chai'); 
const expect = chai.expect; 

const App = require('../app/app');
let app = new App();

let inputStr = 'AAAc91%cWwWkLq$1ci3_848v3d__K';
let inputStrLower = 'aacccd91ee';
let inputStrUpper = 'AAACC91EE';
let inputStrMixedCase = 'AAAcc91EEff';
let inputStrMixedAlternate = 'AaAcC91_EeFf';
let inputStrSizeLimit = 'AAAcc4%WWWLq$11i3_843d__K';
let inputStrEmpty = '';
let inputStrNull;

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
            expect(app.removeExtraChars(inputStrMixedAlternate, [9])).to.not.include(9); 
        })
        
        it('removes a set of mixed chars', () => {
            expect(app.removeExtraChars(inputStrMixedAlternate, [9, "_"])).to.not.include(9, "_");
        })
        
        it("removes a 4's and underscores from test input string", () => {
            expect(app.removeExtraChars(inputStr, [4, "_"])).to.not.include(4, "_");
        })
        
    })
    
    describe('replace a char with another char', () => {
        it('replaces dollar-sign with pound-sign', () => {
            expect(app.replaceChars(inputStr, '$', '£')).to.include('£').but.not.include('$');
        })
        
        it('replaces an underscore char with dash char', () => {
            expect(app.replaceChars(inputStr, '_', '#')).to.include('#').but.not.include('_');
        })
        
    })
    
    describe('check for length of output strings', () => {
        it('expects max 15 char for the output string with input and post procesing strings larger than 15 chars', ()=> {
            expect(app.processInputStr(inputStr).length).to.equal(App.OUTPUT_SIZE);
        })
        
        it('expects less than 15 char for the output string with input string less 15 chars', ()=> {
            expect(app.processInputStr(inputStrMixedAlternate).length).to.be.at.most(App.OUTPUT_SIZE);
        })
                
        it('expects max 15 char for the output string with input string larger 15 but post procesing string less than 15 chars', ()=> {
            expect(app.processInputStr(inputStrSizeLimit).length).to.be.at.most(App.OUTPUT_SIZE);
        })
        
        it('expects DEFAULT_RESULT for empty input string', ()=> {
            expect(app.processInputStr(inputStrEmpty)).to.equal(App.DEFAULT_RESULT);
        })
                
        it('expects DEFAULT_RESULT for null input string', ()=> {
            expect(app.processInputStr(inputStrNull)).to.equal(App.DEFAULT_RESULT);
        })
    })

})