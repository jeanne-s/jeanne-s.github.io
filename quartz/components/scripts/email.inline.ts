// Emails are stored reversed in the HTML so the address never appears literally
// in the page source. Harvesters that don't run JS see nothing usable.
function unscramble(scrambled: string): string {
  return scrambled.split("").reverse().join("")
}

function setupEmails() {
  const slots = document.querySelectorAll<HTMLElement>("span.email[data-rev]")
  for (const slot of slots) {
    const address = unscramble(slot.dataset.rev ?? "")
    if (!address.includes("@")) continue

    const link = document.createElement("a")
    link.href = `mailto:${address}`
    link.textContent = address

    slot.replaceChildren(link)
    slot.classList.add("resolved")
  }
}

document.addEventListener("nav", setupEmails)
