import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Component imports
import DefaultLayout from './components/DefaultLayout';

interface IProps { }

const App: React.FC<IProps> = (props) => {
    const [appTitle, setAppTitle] = useState(`Portfolio (Evgeni Kiradzhiyski)`);
    
    useEffect(() => {
        document.title = appTitle;
    });
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <DefaultLayout/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
