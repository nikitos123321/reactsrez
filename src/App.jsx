import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/HeaderComponent/HeaderComponent'
import Slider from './components/SliderComponent/SliderComponent';
import { Catalog } from './components/CatalogComponent/Catalog';






function App() {


  return (
    <>
      <Header />
      <Slider />
      <div className="container">
        <Catalog />
      </div>

    </>
  )
}

export default App
