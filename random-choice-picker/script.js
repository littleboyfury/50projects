const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)

    randomSelect()
  }
})

function createTags(input) {
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 30

  // 无线循环，间隔 100 ms
  const interval = setInterval(() => {
    // 随机选择一个 tag
    const randomTag = pickRandomTag()

    if (randomTag !== undefined) {
      // 高亮 tag
      highlightTag(randomTag)

      setTimeout(() => {
        // 定时 100 ms 清理高亮
        unHighlightTag(randomTag)
      }, 100)
    }
  }, 100);

  setTimeout(() => {
    // 清理循环器
    clearInterval(interval)

    setTimeout(() => {
      // 随机选一个 tag
      const randomTag = pickRandomTag()

      // 设置高亮
      highlightTag(randomTag)
    }, 100)

  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
