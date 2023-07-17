const setScrollVar = () => {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
  htmlElement.style.setProperty('--scroll', Math.min(percentOfScreenHeightScrolled * 100, 100))
}

setScrollVar()

window.addEventListener('resize', setScrollVar)
window.addEventListener('scroll', setScrollVar)

const dataImgs = document.querySelectorAll('[data-img]')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      dataImgs.forEach(ele => ele.classList.remove('show'))
      const img = document.querySelector(entry.target.dataset.imgToShow)
      img?.classList.add('show')
    }
  })
})
document.querySelectorAll('[data-img-to-show]').forEach(section => {
  observer.observe(section)
})