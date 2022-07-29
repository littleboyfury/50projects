const boxes = document.querySelectorAll('.box')

// 添加滚动监听器
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    // window 高度，视口高度
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        // 距离视口顶部的距离
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
