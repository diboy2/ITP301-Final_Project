function displayAlbums(trackArray, id){
	var tracks = $("#"+id);

	for(i=1; i<trackArray.length; i++){
		var row = $("<div></div>").addClass("row");
		var thumbnail = $("<div></div>").addClass("col-md-6 col-md-offset-3 thumbnail");
		
		var title = $("<h4></h4>").addClass("text-center").text(trackArray[i].trackName);
		
		var audioControls = $("<audio controls></audio>");
		var source = $("<source/>").attr("src",trackArray[i].previewUrl);
		
		audioControls.append(source);
		
		thumbnail.append(title)
		thumbnail.append(audioControls);	
		
		row.append(thumbnail);
		tracks.append(row);
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
