var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();

chai.use(chaiHttp);


describe('notes', function() {
    it('should list ALL notes on /notes GET', function(done) {
        chai.request(server)
          .get('/notes')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.data.should.be.a('array');                                    
            done();
          });
      });      
});


  
