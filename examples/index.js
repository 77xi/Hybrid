const hybrid = require('../src')

// web -> native

// web dispatch base/openURL
hybrid
  .dispatch('base/openURL', { url: 'url' })
  .then(({ status }) => console.log(`openURL`, status))
  .catch(err => console.log(`openURL ${err}`))

// // native callBack base/openURL
setTimeout(() => {
  webApp.callBack('1', { status: 'success' })
  webApp.callBack('2', { status: 'fail' })
})

// web -> native -> web

// web subscribe base/themeChange
const unsubscribe = hybrid.listen('base/themeChange', ({ theme }) =>
  console.log(`theme is ${theme}`)
)

// native publish base/themeChange
webApp
  .dispatch('base/themeChange', { theme: 'light' })
  .then(success => console.log(success))
  .catch(err => console.log(err))

// unsubscribe base/themeChange
unsubscribe()
