import React from 'react'
import { Route, Switch, useHistory } from 'react-router'

export default function OrderDetail(props) {
    let history = useHistory();

    function handleClick() {
        history.push("/Orders/"+props.IdOrder);
    }

    return (
        <>
            <button type="button" onClick={handleClick}>
                Chi tiết
            </button>
            <Route path={`/Orders/`+`props.IđOrder`}>
                Hello
            </Route>
        </>
    );
}
