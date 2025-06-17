import { Link } from 'react-router-dom'
import './About.css'

export function About() {
  return (
    <div className="about">
      <h1 className="about-title">About</h1>
      <p>
        This is a template for building decentralized web applications using:
      </p>
      <ul className="about-list">
        <li>Vite - Next Generation Frontend Tooling</li>
        <li>React - A JavaScript library for building user interfaces</li>
        <li>AR.IO - Decentralized web gateway network</li>
        <li>ArcAO - Community-driven development</li>
      </ul>
      <Link to="/" className="about-back">Back to Home</Link>
    </div>
  )
}
