window.onload = function() {
  var element = document.createElement("textarea");
  // var objImg = new Image();
  //
  // objImg.src = 'share.gif';
  //
  // objImg.alt = 'share icons';
  //
  // objImg.title = 'share to weibo';
  //
  // objImg.style.display = 'none';
  //
  // objImg.style.position = 'absolute';
  //
  // objImg.style.cursor = 'pointer';
  //
  document.body.appendChild(element);

  function selectText() {
    if (document.selection) { //For ie
      return document.selection.createRange().text;
    } else {
      return window.getSelection().toString();
    }
  }

  document.onmouseup = function(ev) {
    var ev = ev || window.event,
      left = ev.clientX,
      top = ev.clientY;
    setTimeout(function() {
      if (selectText().length > 0) {
        setTimeout(function() {
          objImg.style.display = 'block';
          objImg.style.left = left + 'px';
          objImg.style.top = top + 'px';
        }, 100);
      }
    }, 200);

  }

  objImg.onclick = function(ev) {
    window.location.href = 'http://v.t.sina.com.cn/share/share.php?searchPic=false&title=' + selectText() + '&url=' + window.location.href;
  }

  objImg.onmouseup = function(ev) {
    var ev = ev || window.event;
    ev.cancelBubble = true;

  }

  document.onclick = function(ev) {
    objImg.style.display = 'none';
  }
}
