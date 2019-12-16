$(function(){
  // メッセージ表示のHTMLを生成
  function buildHTML(message) {
    var insertImage = '';
    if (message.image.url) {
      insertImage = `<img src="${message.image.url}">`;
      var html = `
                  <div class="main_contents__user">
                  ${message.user}
                    <div class="main_contents__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="main_contents__message"></div>
                  <p class="main_contents__message__content">${message.content}</p>
                  <img class="main_contents__message__image">${insertImage}</img>
                  `
    }
    else{
    var html = `
                <div class="main_contents__user">
                  ${message.user}
                  <div class="main_contents__date">
                    ${message.date}
                  </div>
                </div>
                <div class="main_contents__message"></div>
                <p class="main_contents__message__content">
                  ${message.content}
                </p>
                `
    }
  return html
  }

  // メッセージ送信の非同期通信
  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType:  false,
    })
    .done(function(data) {
      var message = buildHTML(data);
      $('.main_contents').append(message);
      $('.main_contents').animate({ scrollTop: $('.main_contents')[0].scrollHeight});
      $('.new_message')[0].reset();
      $('.submit').prop("disabled", false)
    })
    .fail(function(data) {
      alert("メッセージを入力してください")
    });
  return false;
  });
});