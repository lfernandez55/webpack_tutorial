import React from "react"
import ReactDOM from "react-dom"
import App from "./javascripts/components/App"
import Alt from "./javascripts/components/Alt"

if (document.getElementById('root')){
    ReactDOM.render(<App />, document.getElementById("root")) 
}else if (document.getElementById('alt')){
    ReactDOM.render(<Alt />, document.getElementById("alt")) 
}
