import { Route, Routes } from 'react-router-dom'
import './App.css'
import ColorChanger from './components/Easy/ColorChanger'
import Counter from './components/Easy/counter'
import FormInputMirror from './components/Easy/FormInputMirror'
import Todo from './components/Easy/Todo'
import ToggleVisibility from './components/Easy/ToggleVisibility'
import DisplayUsers from './components/Medium/DisplayUsers'
import Parent from './components/Medium/Parent-Child communication/Parent'
import Main from './components/Medium/SimpleRouting/Main'
import Home from './components/Medium/SimpleRouting/Home'
import About from './components/Medium/SimpleRouting/About'
import Contact from './components/Medium/SimpleRouting/Contact'
import AccordionMain from './components/Medium/Accordion/AccordionMain'

function App() {

    return (
        <>
            {/* EASY */}
            {/* <Counter/> */}
            {/* <Todo/> */}
            {/* <ToggleVisibility/> */}
            {/* <FormInputMirror/> */}
            {/* <ColorChanger/> */}
            {/* MEDIUM */}
            {/* <DisplayUsers/> */}
            {/* <Parent/> */}
            {/* <Main />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes> */}
            <AccordionMain />
        </>
    )
}

export default App
