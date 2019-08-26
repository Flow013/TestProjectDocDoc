import * as React from "react"
import { Button } from "antd"

interface IProps {
  name: string
}

const Main = ({ name = "TestName" }: IProps) => {
  return (
    <>
      <Button href="orderForm" size="large" type="primary">
        Оформить заказ
      </Button>
    </>
  )
}

export default Main
