// ScrollManager.jsx — scroll to top on route change, or to a section when navigating
// from a sub-page via the navbar/footer (state.scrollTo) or a #hash link.
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollManager = () => {
  const { pathname, hash, state } = useLocation()

  useEffect(() => {
    const id = state?.scrollTo || (hash ? hash.slice(1) : null)
    if (id) {
      // wait a frame so the destination page has rendered
      const t = setTimeout(
        () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }),
        50
      )
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, state])

  return null
}

export default ScrollManager
