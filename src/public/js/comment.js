$(document).ready(function () {
  $.ajax({
    url:  'app/comments.php',
    success: function (data) {
      var data = JSON.parse(data);
      for (var i = 0; i < data.length; i++) {
        var html = "";
        html += '<div class="comment">'
        html += '<div class="head">'
        html += '<div class="time">' + data[i].date_add + '</div>';
        html += '<div class="name">' + data[i].name + '</div>';
        html += '</div>'
        html += '<div class="message">' + data[i].text_comment + '</div>';
        html += '</div>'
        $('#comments').append(html);
      }
    }
  });

  $('#submit').click(function () {
    var name = $('input#name').val();
    var comment = $('textarea#comment').val();
    var data = 'name=' + name + '&page_id=1' + '&text_comment=' + comment;

    $.ajax({
      type: 'post',
      url: 'app/addcomment.php',
      data: data,
      cache: false,
      success : function (result) {
        alert(result);
      }
    });
  });
});
