import * as React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import MainPage from './view/pages/Main'
import OrderForm from './view/pages/OrderForm'

export default function confugureRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/orderForm" component={OrderForm} />
        <Route path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  )
}
