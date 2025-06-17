import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './shared/components'
import { Home, About } from './pages'

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
