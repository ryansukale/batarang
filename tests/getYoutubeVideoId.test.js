var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var getYoutubeVideoId = require(ROOT + 'lib/getYoutubeVideoId');

describe('getYoutubeVideoId', function () {
  it('returns video id of a youtube video', function () {
    var url = 'https://www.youtube.com/watch?v=EXeTwQWrcwY';
    expect(getYoutubeVideoId(url)).to.equal('EXeTwQWrcwY');
  });

  it('returns video id from a playlist', function () {
    var playlistUrl = 'https://www.youtube.com/watch?v=ZRG1tWQN6e8&list=PLatdFpOvGjYGM6SMVXz1jpJMJdeHLKJun';
    expect(getYoutubeVideoId(playlistUrl)).to.equal('ZRG1tWQN6e8');
  });

  it('returns video id from a short url', function () {
    var shortUrl = 'https://youtu.be/VLXyMzCi7Mo';
    expect(getYoutubeVideoId(shortUrl)).to.equal('VLXyMzCi7Mo');
  });

  it('returns video id from an embed url', function () {
    var embedUrl = 'https://www.youtube.com/embed/VLXyMzCi7Mo';
    expect(getYoutubeVideoId(embedUrl)).to.equal('VLXyMzCi7Mo');
  });
});