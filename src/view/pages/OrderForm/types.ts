import { OrderFormDto } from "src/models/OrderFormDto"
import { WrappedFormUtils } from "antd/lib/form/Form"

export type deliveryType = "delivery" | "pickup"
export type selectedTab = "main" | "address"

export interface IProps {
  form: WrappedFormUtils
}

export interface IState {
  model: OrderFormDto
  deliveryType: deliveryType
  selectedTab: selectedTab,
  mainTabValid: boolean
}
