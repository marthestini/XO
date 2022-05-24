$(document).ready(function(){

    // if the user clicks on the like button ...
    $('.like-btn').on('click', function(){
      var spot_ID = $(this).data('id');
      $clickedButton = $(this);
      if ($clickedButton.hasClass('fa-thumbs-o-up')) {
          action = 'like';
      } else if($clickedButton.hasClass('fa-thumbs-up')){
          action = 'unlike';
      }
      $.ajax({
          url: 'likesAndDislikes.php',
          type: 'post',
          data: {
              'action': action,
              'spot_ID': spot_ID
          },
          success: function(data){
              res = JSON.parse(data);
              if (action == "like") {
                  $clickedButton.removeClass('fa-thumbs-o-up');
                  $clickedButton.addClass('fa-thumbs-up');
              } else if(action == "unlike") {
                  $clickedButton.removeClass('fa-thumbs-up');
                  $clickedButton.addClass('fa-thumbs-o-up');
              }
              // display the number of likes and dislikes
              $clickedButton.siblings('span.likes').text(res.likes);
              $clickedButton.siblings('span.dislikes').text(res.dislikes);
    
              // change button styling of the other button if user is reacting the second time to post
              $clickedButton.siblings('i.fa-thumbs-down').removeClass('fa-thumbs-down').addClass('fa-thumbs-o-down');
          }
      });		
    
    });
    
    // if the user clicks on the dislike button ...
    $('.dislike-btn').on('click', function(){
      var spot_ID = $(this).data('id');
      $clickedButton = $(this);
      if ($clickedButton.hasClass('fa-thumbs-o-down')) {
          action = 'dislike';
      } else if($clickedButton.hasClass('fa-thumbs-down')){
          action = 'undislike';
      }
      $.ajax({
          url: 'likesAndDislikes.php',
          type: 'post',
          data: {
              'action': action,
              'spot_ID': spot_ID
          },
          success: function(data){
              res = JSON.parse(data);
              if (action == "dislike") {
                  $clickedButton.removeClass('fa-thumbs-o-down');
                  $clickedButton.addClass('fa-thumbs-down');
              } else if(action == "undislike") {
                  $clickedButton.removeClass('fa-thumbs-down');
                  $clickedButton.addClass('fa-thumbs-o-down');
              }
              // display the number of likes and dislikes
              $clickedButton.siblings('span.likes').text(res.likes);
              $clickedButton.siblings('span.dislikes').text(res.dislikes);
              
              // change button styling of the other button if user is reacting the second time to post
              $clickedButton.siblings('i.fa-thumbs-up').removeClass('fa-thumbs-up').addClass('fa-thumbs-o-up');
          }
      });	
    
    });
    
    });