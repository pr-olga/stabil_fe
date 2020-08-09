const animatedScrollObsever = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation-onroal')
        animatedScrollObsever.unobserve(entry.target)
      }
    })
  }
)

export default {
  bind (el) {
    animatedScrollObsever.observe(el)
  }
}
