$(function(){
  // メッセージ表示のHTMLを生成
  var buildHTML = function(message) {
    if (message.content && message.image) {
      
      var html = `
                    <div class="main_contents__user" >
                      ${message.user}
                      <div class="main_contents__date">
                        ${message.date}
                      </div>
                    </div>
                    <div class="main_contents__message"></div>
                    <p class="main_contents__message__content" data-message-id="${message.id}">${message.content}</p>
                    <img src="${message.image}">
                  `
    }else if (message.content){
     var html = `
                    <div class="main_contents__user">
                      ${message.user}
                      <div class="main_contents__date">
                        ${message.date}
                      </div>
                    </div>
                    <div class="main_contents__message"></div>
                    <p class="main_contents__message__content" data-message-id="${message.id}">
                      ${message.content}
                    </p>
                  `
    } else if (message.image) {
      var html = `
                    <div class="main_contents__user">
                    ${message.user}
                    <div class="main_contents__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="main_contents__message"></div>
                  <p class="main_contents__message__content" data-message-id="${message.id}">
                  <img src="${message.image}">
                  </p>
                    
                  `
    };
  return html;
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

//自動更新
  let reloadMessages = function () {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      let last_message_id = $('.main_contents__message__content:last').data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        var insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildHTML(message)
        });
        $('.main_contents').append(insertHTML);
        $('.main_contents').animate({ scrollTop: $('.main_contents')[0].scrollHeight});
      })
      .fail(function() {
        alert('自動更新に失敗しました');
      });
    }
  }
  setInterval(reloadMessages, 7000);
});