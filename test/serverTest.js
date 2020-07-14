const app = require("./../server.js");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

describe("Server test", () => {

  it("Returns successful result and movies ", done => {
    chai
      .request(app)
      .get("/api/v1/starWars/movies")
      .query({searchTerm : 'New'})
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals(200);
        expect(res.body.message).to.equals("Movie fetched successfully");
        expect(res.body.body).to.deep.include({ "episode_id": 4, "title": "A New Hope" });
        done();
      });
  });

  it("Returns bad request if query parameter is not sent ", done => {
    chai
      .request(app)
      .get("/api/v1/starWars/movies")
      .query({searchTerm : ''})
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals(200);
        expect(res.body.message).to.equals("Bad request");
        done();
      });
  });

  it("Returns successful result and characters for the movie ", done => {
    chai
      .request(app)
      .get("/api/v1/starWars/charactersForMovie")
      .query({title : 'A New hope'})
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals(200);
        expect(res.body.message).to.equals("Characters fetched successfully");
        expect(res.body.body).to.deep.include({
          "name": "Luke Skywalker",
          "height": "172",
          "birth_year": "19BBY",
          "gender": "male",
          "mass": "77"
      });
        done();
      });
  });

  it("Returns error id not full movie name is sent", done => {
    chai
      .request(app)
      .get("/api/v1/starWars/charactersForMovie")
      .query({title : 'A '})
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.status).to.equals(400);
        expect(res.body.message).to.equals("Error: More then one movie found");
        done();
      });
  });

  it("Returns bad request if title is not sent ", done => {
    chai
    .request(app)
    .get("/api/v1/starWars/charactersForMovie")
    .query({title : ''})
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.status).to.equals(200);
      expect(res.body.message).to.equals("Bad request");
      done();
  });
});

});