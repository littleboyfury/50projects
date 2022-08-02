const insert = document.getElementById('insert')

// 键盘按下事件
window.addEventListener('keydown', (event) => {
  // event.key 键盘字母
  // event.keyCode 键盘对应的数字
  // event.code 键盘对应的编码
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})
