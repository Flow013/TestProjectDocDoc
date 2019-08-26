import * as React from "react"
import { Tabs, Radio, Button, Form } from "antd"
import { nameof } from "ts-simple-nameof"
import { OrderFormDto, OrderFormDtoOptions } from "src/models/OrderFormDto"
import FormModel from "src/view/components/FormModel"
import { IProps, IState, selectedTab, deliveryType } from "./types"

const { TabPane } = Tabs

const styles = {
  nextToAddressButton: {
    margin: "5px"
  }
}

class OrderForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      model: {} as OrderFormDto,
      deliveryType: "delivery",
      selectedTab: "main"
    }
  }
  onTabChanged = (selectedTab: selectedTab) => {
    if (selectedTab === "main") {
      this.setState(prevState => ({
        selectedTab,
        deliveryType: "delivery",
        model: {
          ...prevState.model,
          country: undefined,
          city: undefined,
          postcode: undefined,
          address: undefined,
          deliveryDate: undefined,
          comment: undefined
        }
      }))
    } else {
      this.setState(prevState => ({
        selectedTab
      }))
    }
  }

  onDeliveryTypeChanged = (deliveryType: deliveryType) => {
    this.setState(prevState => ({
      deliveryType,
      model: {
        ...prevState.model,
        country: undefined,
        city: undefined,
        postcode: undefined,
        address: undefined,
        deliveryDate: undefined
      }
    }))
  }

  render() {
    const { form } = this.props
    const { model, deliveryType, selectedTab } = this.state
    return (
      <>
        <Tabs activeKey={selectedTab} onChange={this.onTabChanged}>
          <TabPane key="main" tab="Основные данные">
            <Form form={form}>
              <FormModel
                model={model}
                modelOptions={OrderFormDtoOptions}
                form={form}
                showFields={[
                  nameof<OrderFormDto>(x => x.firstName),
                  nameof<OrderFormDto>(x => x.lastName),
                  nameof<OrderFormDto>(x => x.phoneNumber),
                  nameof<OrderFormDto>(x => x.email)
                ]}
              />
            </Form>
            <Button
              type="primary"
              style={styles.nextToAddressButton}
              onClick={() => this.onTabChanged("address")}
            >
              Продолжить
            </Button>
          </TabPane>
          <TabPane key="address" tab="Адрес доставки">
            <Radio.Group
              onChange={e => this.onDeliveryTypeChanged(e.target.value)}
            >
              <Radio value="delivery" checked={deliveryType === "delivery"}>
                Доставка
              </Radio>
              <Radio value="pickup" checked={deliveryType === "pickup"}>
                Самовывоз
              </Radio>
            </Radio.Group>

            <Form form={form}>
              {deliveryType === "delivery" && (
                <FormModel
                  model={model}
                  modelOptions={OrderFormDtoOptions}
                  form={form}
                  showFields={[
                    nameof<OrderFormDto>(x => x.country),
                    nameof<OrderFormDto>(x => x.city),
                    nameof<OrderFormDto>(x => x.postcode),
                    nameof<OrderFormDto>(x => x.address),
                    nameof<OrderFormDto>(x => x.deliveryDate)
                  ]}
                />
              )}

              <FormModel
                model={model}
                modelOptions={OrderFormDtoOptions}
                form={form}
                showFields={[nameof<OrderFormDto>(x => x.comment)]}
              />
            </Form>
            <Button
              type="primary"
              style={styles.nextToAddressButton}
              onClick={() => this.onTabChanged("address")}
            >
              Отправить
            </Button>
          </TabPane>
        </Tabs>
      </>
    )
  }
}

export default Form.create<IProps>()(OrderForm)
