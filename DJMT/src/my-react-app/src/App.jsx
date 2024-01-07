import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './pages/home/Home.jsx'
import Join from './pages/member/Join.jsx'
import Login from './pages/member/Login.jsx'
import ProductList from './pages/product/ProductList.jsx'
import ProductDetail from './pages/product/ProductDetail.jsx'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/productDetail" element={<ProductDetail />} />
          </Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </HashRouter>
    </>
  )
}

export default App
