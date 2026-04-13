import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Button from '../components/ui/Button'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="notfound-page">
      <Helmet>
        <title>404 — Stránka nenalezena | Para Bellum Lounge</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="notfound-inner container">
        <span className="notfound-code">404</span>
        <h1 className="notfound-title">Stránka nenalezena</h1>
        <p className="notfound-text">Je nám líto, ale tato stránka neexistuje nebo byla přesunuta.</p>
        <Button href="/" variant="primary" isRouterLink>Zpět na úvod</Button>
      </div>
    </main>
  )
}
