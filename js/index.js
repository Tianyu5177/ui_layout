function setRootFont() {
  var styleNode = document.createElement('style')
  var size = document.documentElement.clientWidth/10;
  styleNode.innerHTML = 'html,body{font-size:'+size+'px!important}';
  document.head.appendChild(styleNode);
}
setRootFont()
window.onresize = function () {
  setRootFont()
}

var footerItems = document.querySelectorAll('#footer .footer-item');
var sections = document.querySelectorAll('#content section');

for (var i=0; i<footerItems.length; i++ ){
  var item = footerItems[i];
  item.index = i
  //给每一个item加点击事件
  item.addEventListener('touchend',function () {

    //1.清除所有高亮
    for (var j=0; j<footerItems.length; j++ ){
      footerItems[j].querySelector('.icon').className = 'icon'
      footerItems[j].querySelector('.text').className = 'text'
      sections[j].className = 'content-item'
    }

    //2.当前的高亮
    footerItems[this.index].querySelector('.icon').className = 'icon active';
    footerItems[this.index].querySelector('.text').className = 'text active';
    sections[this.index].className = 'content-item active'
  })
}
