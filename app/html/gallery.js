$(function(){
	$('#gallery').photobox('a');
	displayImages(1);
	$(".pageButton").on("click",function(){
		var num = parseInt($(this).html());
		displayImages(num);
	});
});

function displayImages(num){
		var index = ((num-1)*24)+1;
		console.log(index);
		$('#gallery').photobox('destroy');
		$("#gallery .row").empty();
		for(; index<=num*24;index++){
			displayImage(index);
		}
		$('#gallery').photobox('a');
}

function displayImage(index){
	var galleryRow = $("#gallery .row");
	var column = $("<div></div>").addClass("col-md-2");

	var anchor = $("<a></a>").attr("href","../images/taylor_swift_small_pics/"+index+".jpg");
	var image = $("<img/>").addClass("img-thumbnail").attr("src","../images/taylor_swift_small_pics/"+index+".bmp");

	anchor.append(image);

	column.append("<br/><br/>");
	column.append(anchor);
	galleryRow.append(column);
}	


