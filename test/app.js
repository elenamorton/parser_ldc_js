const chai = require('chai'); 
const expect = chai.expect; 

const App = require('../app/app');
let app = new App();

let inputStr = 'AAAc91%cWwWkLq$1ci3_848v3d__K';
let inputStrLower = 'aacccd91ee'

describe('App', () => {
    
    describe('removes duplicated characters from a string', () => {
        it('removes lower case chars', () => {
           expect(app.removeDuplicateChars(inputStrLower)).to.equal('Ac91%cWwWkLq$1ci3_848v3dK'); 
        })
        
        
    })
})