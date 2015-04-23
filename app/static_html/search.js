var videos;
var nextPageToken ="";
var prevPageToken = "";

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search(pageToken) {
  clearPage();
  var q = "Taylor Swift" + $('#query').val();
  console.log(q);
  var request = gapi.client.youtube.search.list({
    "q": q,
    "part": 'snippet',
    "maxResults":12,
    "type":"video",
    "pageToken":pageToken
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    console.log(response);
    console.log(response.result);
    nextPageToken = response.nextPageToken;
    prevPageToken = response.prevPageToken;
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
  var videoThumbnails= $(".video-thumbnails");
  var videoThumbnailsRow;
  var videoThumbnail; 
  for(i=0;i<videos.length;i++){
    if(i%2==0){
      videoThumbnailsRow = $("<div></div>").addClass("row video-thumbnails-row");
      videoThumbnails.append(videoThumbnailsRow);
      videoThumbnails.append($("<br>"));
    }
    videoThumbnail = getVideoThumbnail(videos[i].videoId,videos[i].imageURL,videos[i].title, videos[i].description);
    videoThumbnailsRow.append(videoThumbnail);
    if(i%2==0){
      videoThumbnailsRow.append($("<div></div>").addClass("col-lg-2"));
    }
  }
}


function getVideoThumbnail(videoId,imageURL,title,description){
  var videoThumbnail = $("<div></div>").addClass("col-lg-5 video-thubmnail thumbnail");
  
  var videoThumbnailImageAnchor = $("<a href='http://youtube.com/watch?v="+videoId+"'></a>").addClass("video-thumbnail-image-anchor");
  var videoThumbnailImageWrapper = $("<div></div>").addClass("col-md-5 video-thumbnail-image-wrapper");
  var videoThumbnailImage = $("<img>").addClass("img-responsive video-thumbnail-image").prop("src",imageURL);
  

  var videoThumbnailCaption = $("<div></div>").addClass("col-md-7 video-thumbnail-caption");
  var videoThumbnailTitle = $("<h4></h4>").addClass("video-thumbnail-title").text(title);
  var videoThumbnailDescription = $("<p></p>").addClass("video-thumbnail-description").text(description);

  //attach thumbnail image
  videoThumbnail.append(videoThumbnailImageWrapper);
  videoThumbnailImageWrapper.append(videoThumbnailImageAnchor);
  videoThumbnailImageAnchor.append(videoThumbnailImage);

  //attach thumbnail caption
  videoThumbnail.append(videoThumbnailCaption);
  videoThumbnailCaption.append(videoThumbnailTitle);
  videoThumbnailCaption.append(videoThumbnailDescription);

  return videoThumbnail;


}

function getNextPage(){
  if(nextPageToken!=""){
     search(nextPageToken);
  }
 
}

function getPreviousPage(){
  if(prevPageToken!=""){
    search(prevPageToken);
  }
}

function clearPage(){
  $(".video-thumbnails").empty();
}

$(function(){
search("");
});