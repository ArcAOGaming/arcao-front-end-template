import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout, Analytics } from './shared/components'
import { Home, About } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Analytics>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Analytics>
    </BrowserRouter>
  )
}

export default App
