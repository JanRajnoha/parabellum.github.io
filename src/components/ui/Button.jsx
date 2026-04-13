import { Link } from 'react-router-dom'

export default function Button({ children, variant = 'primary', href, onClick, className = '', isRouterLink = false }) {
  const cls = `btn btn-${variant} ${className}`.trim()

  if (href && isRouterLink) {
    return (
      <Link to={href} className={cls}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
