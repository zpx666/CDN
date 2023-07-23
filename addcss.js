window.onload = function () {
  setTimeout(function () {
    // 获取所有的style标签
    var styleTags = document.getElementsByTagName('style');
    var cssText = '';

    // 循环遍历每个style标签中的CSS代码
    for (var i = 0; i < styleTags.length; i++) {
      cssText += styleTags[i].innerHTML;
    }

    // 创建一个新的style标签，并将合并的CSS代码添加到其中
    var newStyleTag = document.createElement('style');
    newStyleTag.type = 'text/css';
    newStyleTag.innerHTML = cssText;

    // 将新的style标签添加到body的最后
    document.body.appendChild(newStyleTag);
  }, 3000);
};
