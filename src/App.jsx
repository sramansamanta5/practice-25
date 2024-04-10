
import './App.css'
import Accordion from './components/Accordion/Accordion'
import Main from './components/Modal/Main'
import Starrating from './components/Star-Rating/Starrating'
import TictacToe from './components/TictacToe'
import Maintree from './components/TreeMenu/Maintree'
import menus from './components/TreeMenu/Data'
import SingleTree from './components/TreeMenu/SingleTree'
import Parentree from './Treeview/Parentree'
import Loadmore from './components/Loadmore/Loadmore'
import Pagination from './components/Pagination/Pagination'
import GiveRating from './components/Star-Rating/GiveRating'
import Onload from './components/OnPageLoad/Onload'
import Mainhook from './customhooks/Mainhook'
import Usefetch from './customhooks/Usefetch'
import Dropdownfilter from './components/Dropdownfilter/Dropdownfilter'
import Randomcolour from './components/Randomcolour/Randomcolour'
import Tabchange from './components/Tabchange/Tabchange'
import Mainconnect from './FinalTreeView/Mainconnect'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Scrolldiv from './Pages/Scrolldiv'
import ImageTray from './components/ImageTray/ImageTray'


//
//Change Page
//</button>
//

function App() {
  
  return (
    <>
    <BrowserRouter>
    
      <TictacToe/>
      <Accordion/>
      <Starrating/>
      <Main/>
      <Maintree/> 
      <SingleTree menus={menus}/>
      <Parentree/>
      <Loadmore/>
      <Pagination/>
      <GiveRating/>
      <Onload/>
      <Mainhook/>
      <Usefetch/>
      <Dropdownfilter/>
      <Randomcolour/>
      <Tabchange/>
      <Mainconnect/>
     
      <Routes>
        <Route exact path='/scrolldiv' element={<Scrolldiv/>}/>
       </Routes>
       <Link to='/scrolldiv'><button className='bg-black p-3 text-white'>ScrollDiv</button></Link>
      </BrowserRouter>

      <ImageTray/>
      
    </>
  )
}

export default App
