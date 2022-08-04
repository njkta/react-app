import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wr">
                <Header />
                <Navbar friends={props.state.dialogs} />
                <div className='app-wr-content'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile
                                   profile={props.state.profile}
                                   addPost={props.addPost}
                                   updatePostText={props.updatePostText}
                               />}
                        />
                        <Route path='/dialogs'
                               element={<Dialogs dialogs={props.state.dialogs} />}
                        />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
