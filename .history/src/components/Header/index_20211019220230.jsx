import React from 'react'
import {Card,Image,Button} from "react-bootstrap";
function Header(props) {
    return (
            <div className="header">
                <div className="header__title">
                    <h4>{props.title}</h4>
                </div>
                <div className="header--logOutAdmin">
                     <Button>Đăng xuất</Button>
                </div>
            </div>
   )
}
export default Header;