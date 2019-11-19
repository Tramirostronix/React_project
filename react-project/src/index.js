import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import "./index.css"
import Dashboard from "./Dashboard"

ReactDOM.render(
    <BrowserRouter>
    <Dashboard />
    </BrowserRouter>, document.getElementById("root")
)