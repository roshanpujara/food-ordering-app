import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
const App = () => {
    return (
        <><div className="w-11/12 m-auto">
        <Header/>
        <Body/>
        <Footer/>
        </div>
        </>
        

    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);