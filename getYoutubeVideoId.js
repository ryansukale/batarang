// http://stackoverflow.com/a/27728417
const YOUTUBE_REGEX = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

function getYoutubeVideoId(url) {
  return url.match(YOUTUBE_REGEX)[1];
}

module.exports = getYoutubeVideoId;