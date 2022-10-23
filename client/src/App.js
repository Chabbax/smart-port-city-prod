// Imports
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";

import Sports from "./pages/Sports";
import Main from "./pages/Main";
import Facilities from "./pages/Facilities";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

// All components are called here
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/facilities">
                <Facilities />
              </Route>
              <Route path="/sports">
                <Sports />
              </Route>
              <Route path="/table" component={Home}></Route>
              <Route path="/add" component={CreatePost}></Route>
              <Route path="/edit/:id" component={EditPost}></Route>
              <Route path="/post/:id" component={PostDetails}></Route>
            </Switch>
          </div>
        </div>
        <ToastContainer style={{ width: "400px" }} />
      </BrowserRouter>
    );
  }
}
