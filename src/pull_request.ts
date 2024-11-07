const addShortcutKey = (key: string, handler: (e: KeyboardEvent) => Promise<void>) => {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      return
    }
    // prevent handling a child event such as <input>
    if (e.target === document.body && e.key === key) {
      handler(e).catch(console.error)
    }
  })
}

addShortcutKey('e', async () => {
  const menuButton = document.querySelector('.timeline-comment-action')
  if (menuButton instanceof HTMLElement) {
    menuButton.click()
  }
  for (let i = 0; i < 10; i++) {
    await sleep(100)
    const editButton = document.querySelector('.js-comment-edit-button')
    if (editButton instanceof HTMLElement) {
      editButton.click()
      return
    }
  }
})

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
