function setupBookGrid() {
  const covers = document.querySelectorAll<HTMLElement>(".book-cover")
  let activeCard: HTMLElement | null = null

  for (const cover of covers) {
    function handleClick() {
      const card = cover.closest(".book-card") as HTMLElement | null
      if (!card) return

      const detail = card.querySelector<HTMLElement>(".book-detail")
      if (!detail) return

      const grid = card.closest(".book-grid") as HTMLElement | null
      if (!grid) return

      const isAlreadyOpen = activeCard === card

      // Remove any currently expanded detail
      const existing = grid.querySelector<HTMLElement>(".book-detail-expanded")
      if (existing) {
        existing.remove()
      }
      if (activeCard) {
        activeCard.classList.remove("active")
      }
      activeCard = null

      if (isAlreadyOpen) return

      // Find the last card in the same row (same offsetTop)
      const cardTop = card.offsetTop
      const allCards = Array.from(grid.querySelectorAll<HTMLElement>(".book-card"))
      let lastInRow = card
      for (const c of allCards) {
        if (c.offsetTop === cardTop) {
          lastInRow = c
        }
      }

      // Clone the detail and insert after the last card in the row
      const expanded = detail.cloneNode(true) as HTMLElement
      expanded.classList.add("book-detail-expanded", "open")
      lastInRow.after(expanded)

      card.classList.add("active")
      activeCard = card
    }

    cover.addEventListener("click", handleClick)
    window.addCleanup(() => cover.removeEventListener("click", handleClick))
  }
}

document.addEventListener("nav", setupBookGrid)
