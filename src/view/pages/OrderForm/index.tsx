import * as React from "react"
import { Tabs, Radio, Button, Form } from "antd"
import { nameof } from "ts-simple-nameof"
import { OrderFormDto, OrderFormDtoOptions } from "src/models/OrderFormDto"
import FormModel from "src/view/components/FormModel"
import { IProps, IState, selectedTab, deliveryType } from "./types"

const { TabPane } = Tabs

const styles = {
  button: {
    margin: "5px"
  }
}

const mainTabFields = [
  nameof<OrderFormDto>(x => x.firstName),
  nameof<OrderFormDto>(x => x.lastName),
  nameof<OrderFormDto>(x => x.phoneNumber),
  nameof<OrderFormDto>(x => x.email)
]
const addressTabFields = [
  nameof<OrderFormDto>(x => x.country),
  nameof<OrderFormDto>(x => x.city),
  nameof<OrderFormDto>(x => x.postcode),
  nameof<OrderFormDto>(x => x.address),
  nameof<OrderFormDto>(x => x.deliveryDate)
]

class OrderForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      model: {} as OrderFormDto,
      deliveryType: "delivery",
      selectedTab: "main",
      mainTabValid: false,
    }
  }
  onTabChanged = (selectedTab: selectedTab) => {
    const {
      mainTabValid
    } = this.state
    if (selectedTab === "main") {
      this.setState(prevState => ({
        selectedTab,
        deliveryType: "delivery",
        mainTabValid: false,
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
      if (mainTabValid) {
        this.setState(prevState => ({
          selectedTab
        }))
      }
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

  mainFormIsValid = () => {
    this.setState({mainTabValid: true})
    this.onTabChanged('address')
  }

  handleSubmit = (fields: string[], action?: () => void) => e => {
    e.preventDefault()
    this.props.form.validateFields(fields,
      (err, values) => {
        if (!err) {
          this.setState(prevState => ({ model: { ...prevState.model, values } }))
          action && action()
        }
      })
  }

  render() {
    const { form } = this.props
    const { model, deliveryType, selectedTab } = this.state
    return (
      <>
        <Tabs activeKey={selectedTab} onChange={this.onTabChanged}>
          <TabPane key="main" tab="Основные данные">
            <Form onSubmit={this.handleSubmit(mainTabFields, this.mainFormIsValid)}>
              <FormModel
                model={model}
                modelOptions={OrderFormDtoOptions}
                form={form}
                showFields={mainTabFields}
              />
              <Button
                type="primary"
                style={styles.button}
                htmlType="submit"
              >
                Продолжить
              </Button>
            </Form>
          </TabPane>

          
          <TabPane key="address" tab="Адрес доставки">
            {/* Костыль для очищения полей */}
            {selectedTab === 'address' && (
              <div>
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

                <Form onSubmit={this.handleSubmit(addressTabFields)}>
                  {deliveryType === "delivery" && (
                    <FormModel
                      model={model}
                      modelOptions={OrderFormDtoOptions}
                      form={form}
                      showFields={addressTabFields}
                    />
                  )}

                  <FormModel
                    model={model}
                    modelOptions={OrderFormDtoOptions}
                    form={form}
                    showFields={[nameof<OrderFormDto>(x => x.comment)]}
                  />
                  <Button
                    type="primary"
                    style={styles.button}
                    htmlType="submit"
                  >
                    Отправить
              </Button>
                </Form>
              </div>
            )}
          </TabPane>
        </Tabs>
      </>
    )
  }
}

export default Form.create<IProps>()(OrderForm)
