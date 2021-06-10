import "./App.css";
import React, {useState, useMemo} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import {UserContext} from "./components/context/UserContext";
import {SongContext} from "./components/context/SongContext";
import Sidebar from "./components/pages/music-dashboard/side-navbar/Sidebar";
import Footer from "./components/pages/music-dashboard/footer/Footer";
import SearchPage from "./components/pages/search-page/SearchPage";
import LikedSongs from "./components/pages/liked-songs/LikedSongs";
import Modal from "react-modal";
import MyProfile from "./components/pages/my-profile/MyProfile";

Modal.setAppElement("#root");

function App() {
  const [user, setUser] = useState(null);
  const [song, setSong] = useState(null);

  const provider = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <div className="App">
      <Router>
        {!user && <Navbar />}
        <Switch>
          <UserContext.Provider value={provider}>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/sign-in" exact component={Login} />
            <Route path="/sign-up" exact component={Register} />

            {user && (
              <div className="displayBody">
                <SongContext.Provider value={{song, setSong}}>
                  {user && <Sidebar />}
                  <div className="bodyContainer">
                    <Route path="/music" exact component={SearchPage} />
                    <Route path="/liked-songs" exact component={LikedSongs} />
                    <Route path="/my-profile" exact component={MyProfile} />
                  </div>
                  {user && song && <Footer />}
                </SongContext.Provider>
              </div>
            )}
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
