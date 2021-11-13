import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {routeNavAdmin} from "../../Router/navadmin";
import '../../view/App.scss';
import logo from "../../Image/logo.png";
import NavLinkComponent from "../NavLinkComponent"
function NavAdmin(){
    return (
        <Router>
            <div className='viewAdmin'>
                <div className="viewAdmin__nav">
                    <div className="viewAdmin__nav__header">
                        <img src={logo} />
                    </div>
                    <hr/>
                    <div className="viewAdmin__nav__body">
                        {routeNavAdmin.map(value=>{
                            return (
                                <NavLinkComponent 
                                    icon = {value.icon}
                                    to={value.path}
                                    label={value.label}
                                />
                            ); 
                        })}
                    </div>
                </div>
                <div className="viewAdmin__content">
                    <Switch>
                    {routeNavAdmin.map(value=>{
                        return (
                            <Route path = {value.path}>
                                {value.component}
                            </Route>
                        ); 
                    })}
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
export default NavAdmin;

