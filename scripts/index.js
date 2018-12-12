
function putUserId(id) {
  if (id === undefined) {
    alert("id is empty!!");
  } else {
    console.log(document.form);
    $("input[name=user_id]").val(id)
  }
}

function putPassword(password) {
  if (password === undefined) {
    alert("password is empty!!");
  } else {
    $("input[name=password]").val(password);
  }
}

function clickLogin() {
  var loginButton = $("img[alt='입렵한 정보를 이용하여 로그인합니다.']");
  loginButton.click();
}

$(document).ready(function () {
  chrome.storage.sync.get(['ssu_username', 'ssu_password'], function(data) {
    if (data.ssu_username && data.ssu_password) {
      putUserId(data.ssu_username);
      putPassword(data.ssu_password);
      clickLogin();
    } else {
      $('<div class="modal">\
				<h3 style="margin-bottom:10px;">SsuFi</h3>\
				<p>학번과 비밀번호는 앞으로 크롬계정에 저장되며 SsuFi 플러그인을 통해 자동으로 로그인됩니다\
				</div>').appendTo('body').modal({zIndex: 1000});
      $("img[alt='입렵한 정보를 이용하여 로그인합니다.']").on('click', function() {
        chrome.storage.sync.set({
          "ssu_username": $("input[name=user_id]").val(),
          "ssu_password": $("input[name=password]").val()
        });
      });
      console.log($("input[name=user_id]").val(), $("input[name=password]").val());
    }
  });
});
