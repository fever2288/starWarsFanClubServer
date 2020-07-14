const starWarsApiClient = require('../../external/starWarsApiClient')
const movieService = require('../../service/movieService')
const sinon = require('sinon')
const expect = require('expect')
const A_NEW_HOPE = {
  title: 'A New Hope',
  episode_id: 4,
}
const LAST_JEDI = {
  title: 'Last Jedi',
  episode_id: 6,
}

describe('movieService', function () {

  describe('#getAllMovies()', function () {

    afterEach(function () {
      starWarsApiClient.getAllMoviesByTitle.restore()
    })

    it('should return empty array when no movies are found', function () {
      sinon.stub(starWarsApiClient, 'getAllMoviesByTitle').returns([])

      var resultPromise = movieService.getAllMovies('This is not a SW movie')

      return resultPromise.then(function (result) {
        expect(result).toStrictEqual([])
      })
    })

    it('should return single movie array when one movie is found', function () {
      sinon.stub(starWarsApiClient, 'getAllMoviesByTitle').returns([A_NEW_HOPE])

      var resultPromise = movieService.getAllMovies('A New Hope')

      return resultPromise.then(function (result) {
        expect(result).toStrictEqual([A_NEW_HOPE])
      })
    })

    it('should return multiple movies array when multiple movies are found', function () {
      sinon.stub(starWarsApiClient, 'getAllMoviesByTitle').returns([A_NEW_HOPE, LAST_JEDI])

      var resultPromise = movieService.getAllMovies('A New Hope')

      return resultPromise.then(function (result) {
        expect(result).toStrictEqual([A_NEW_HOPE, LAST_JEDI])
      })
    })
  })
})
