'use client'

import { useEffect } from 'react'
import anime from 'animejs'

export default function AnimatedContent() {
  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1200
    })

    timeline
      .add({
        targets: '.company-name',
        opacity: [0, 1],
        translateY: [-30, 0],
        delay: 500
      })
      .add({
        targets: '.coming-soon',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: 200
      }, '-=800')
      .add({
        targets: '.subtitle',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: 300
      }, '-=600')
      .add({
        targets: '.contact-email',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 400
      }, '-=400')
  }, [])

  return (
    <div className="container">
      <header className="header">
        <h1 className="company-name">Gravichem</h1>
      </header>

      <main className="main-content">
        <h2 className="coming-soon">Coming Soon</h2>
        <p className="subtitle">Highly Purified Graphite Up to 99.99%</p>
      </main>

      <footer className="footer">
        <a href="mailto:info@gravichem.com" className="contact-email">
          info@gravichem.com
        </a>
      </footer>
    </div>
  )
}