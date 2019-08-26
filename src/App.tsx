import * as React from "react"
import "./App.css"
import { Provider } from "react-redux"
import createReduxStore from "./workflows/reducers"
import root from "./workflows/sagas"
import { ConfigProvider } from "antd"
import ru_RU from "antd/lib/locale-provider/ru_RU"
import confugureRouter from "./Router"
import CustomLayout from "./view/components/CustomLayout"

const store = createReduxStore()
const router = confugureRouter()

export default class App extends React.Component {
  render() {
    return (
      <ConfigProvider locale={ru_RU}>
        <Provider store={store}>
          <CustomLayout>{router}</CustomLayout>
        </Provider>
      </ConfigProvider>
    )
  }
}
