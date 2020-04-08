var slider_comment = $('.slider-comment');
slider_comment = $('.slider-comment').bxSlider({
  pager: false,
  slideMargin: 15,
  maxSlides: 5,
  minSlides: 5,
  moveSlides: 1,
  slideWidth: 100,
  onSlideBefore: function ($slideElement, oldIndex, newIndex) {

    $('.slider-comment .active-slide').removeClass('active-slide');
    $('.slider-comment .neighbor').removeClass('neighbor');
    //$slideElement.;
    var i = newIndex + 7;
    $('.slider-comment li:eq(' + i + ')').addClass('active-slide');
    
    var i = newIndex + 6;
    $('.slider-comment li:eq(' + i + ')').addClass('neighbor');
    
    var i = newIndex + 8;
    $('.slider-comment li:eq(' + i + ')').addClass('neighbor');
    
    updateReviewData();
    
  },
  onSliderLoad: function () {
    $('.slider-comment li:eq(7)').addClass('active-slide');
    $('.slider-comment li:eq(6)').addClass('neighbor');
    $('.slider-comment li:eq(8)').addClass('neighbor');
    
    updateReviewData();
  }
});

function updateReviewData()
{
	var $slideElement = $('.slider-comment li.active-slide');
  
  $('.comment-box .title').text( $slideElement.data('title') );
  $('.comment-box .comment').text( $slideElement.data('comment') );
  $('.comment-box .name').text( $slideElement.data('name') );
}