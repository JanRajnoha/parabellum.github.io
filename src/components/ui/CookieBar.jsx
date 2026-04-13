import { useState, useEffect } from 'react'
import { getConsentStatus, setConsent, initAnalytics } from '../../utils/analytics'
import './CookieBar.css'

export default function CookieBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const status = getConsentStatus()
    if (status === 'accepted') {
      initAnalytics()
    } else if (status === null) {
      setVisible(true)
    }
  }, [])

  function accept() {
    setConsent('accepted')
    initAnalytics()
    setVisible(false)
  }

  function decline() {
    setConsent('declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-bar" role="dialog" aria-label="Cookie consent">
      <div className="cookie-bar-content">
        <p>
          Používáme analytické cookies (Google Analytics, Microsoft Clarity) pro zlepšení webu.
          Vaše data nezpracováváme pro reklamu.
        </p>
        <div className="cookie-bar-actions">
          <button className="btn btn-primary cookie-accept" onClick={accept}>
            Přijmout
          </button>
          <button className="btn btn-ghost cookie-decline" onClick={decline}>
            Odmítnout
          </button>
        </div>
      </div>
    </div>
  )
}
