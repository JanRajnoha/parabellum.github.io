const GA_ID = 'G-W9PN9CGD8L'
const CLARITY_ID = '46a2fmbv8u'

function injectScript(src, onLoad) {
  if (document.querySelector(`script[src="${src}"]`)) return
  const script = document.createElement('script')
  script.src = src
  script.async = true
  if (onLoad) script.onload = onLoad
  document.head.appendChild(script)
}

function initGA() {
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, () => {
    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', GA_ID)
  })
}

function initClarity() {
  injectScript(`https://www.clarity.ms/tag/${CLARITY_ID}`, () => {
    // Signal consent to Clarity after the script loads
    if (typeof window.clarity === 'function') {
      window.clarity('consent')
    }
  })
}

export function initAnalytics() {
  initGA()
  initClarity()
}

export function hasConsent() {
  return localStorage.getItem('cookie_consent') === 'accepted'
}

export function setConsent(value) {
  localStorage.setItem('cookie_consent', value)
}

export function getConsentStatus() {
  return localStorage.getItem('cookie_consent') // 'accepted' | 'declined' | null
}
