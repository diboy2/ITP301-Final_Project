var videos;
// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = "Taylor Swift" + $('#query').val();
  console.log(q);
  var request = gapi.client.youtube.search.list({
    "q": q,
    "part": 'snippet',
    "maxResults":10
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    console.log(response);
    console.log(response.result);
    getVideoParameters(response.result["items"]);
    displayVideos();
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}


function getVideoParameters(items){
  videos = [];
  var video;

  for(i=0;i<items.length;i++){
    video = {
      "videoId":items[i].id.videoId,
      "title":items[i].snippet.title,
      "imageURL":items[i].snippet.thumbnails.medium.url,
      "description":items[i].snippet.description
    };
    videos.push(video);
  }
}
function displayVideos(){
  for(i=0;i<videos.length;i++){
    displayVideo(videos[i].imageURL,videos[i].title, videos[i].description);
  }
}
function displayVideo(imageURL,title,description){
  var videoThumbnails= $(".video-thumbnails");
  var videoThumbnailsRow = $("<div></div>").addClass("row video-thumbnails-row");
  var videoThumbnail = $("<div></div>").addClass("col-lg-4 video-thubmnail");
  
  var videoThumbnailImageWrapper = $("<div></div>").addClass("col-md-4 video-thumbnail-image-wrapper");
  var videoThumbnailImage = $("<img>").addClass("img-responsive video-thumbnail-image").prop("src",imageURL);
  

  var videoThumbnailCaption = $("<div></div>").addClass("col-md-8 video-thumbnail-caption");
  var videoThumbnailTitle = $("<h4></h4>").addClass("video-thumbnail-title").text(title);
  var videoThumbnailDescription = $("<p></p>").addClass("video-thumbnail-description").text(description);

  //attach row
  videoThumbnails.append(videoThumbnailsRow);

  //attach column
  videoThumbnailsRow.append(videoThumbnail);

  //attach thumbnail image
  videoThumbnail.append(videoThumbnailImageWrapper);
  videoThumbnailImageWrapper.append(videoThumbnailImage);

  //attach thumbnail caption
  videoThumbnail.append(videoThumbnailCaption);
  videoThumbnailCaption.append(videoThumbnailTitle);
  videoThumbnailCaption.append(videoThumbnailDescription);



}