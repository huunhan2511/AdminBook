import React from 'react'
import { Route, Switch } from 'react-router'

export default function OrderDetail(props) {
    return (
        <Switch>
            <Route path={`/Orders/`+props.id}>
                Hello
            </Route>
        </Switch>
    )
}
