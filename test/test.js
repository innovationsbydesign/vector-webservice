const chai = require('chai')
const assert = chai.assert;
const request = require('supertest');



describe('Launch Web Server', function() {
    var app = require('../server');
   
    describe('GET Homepage', function() {
        it('returns main page',   async () => {
            const res =  await request(app).get('/').expect(200);        
            assert.include(res.text, 'Welcome to Vector\'s Homepage');
           // console.log(res.text);
                       
         })   
            
    });
 
  });