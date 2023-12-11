import './App.scss'
import Layout from './components/layout/Layout'
import { Route, Routes } from 'react-router-dom'
import HomeMovie from './components/home/HomeMovie'
import Movies from './components/home/Movies'
import MovieDetail from './components/movie-detail/MovieDetail'
import Series from './components/home/Series'
import Payment from './components/payment/Payment'

function App() {

  return (
    <>
      <div className="wrapper">
        <div className="mv">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeMovie />} />
              <Route path="movies" element={<Movies />} />
              <Route path="series" element={<Series />} />
            </Route>
            <Route path='/movie-detail/:id' element={<MovieDetail/>}></Route>
            <Route path='/payment' element={<Payment />}></Route>

          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
