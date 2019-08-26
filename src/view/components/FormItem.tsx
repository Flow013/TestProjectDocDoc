import * as React from "react"
import FormOptionsItem from "src/models/FormOptionsItem"
import { Form, Input, Col } from "antd"
import { WrappedFormUtils } from "antd/lib/form/Form"

export interface IProps {
  fieldName: string
  value: any
  modelOptions: FormOptionsItem

  form: WrappedFormUtils
}

const FormItem = ({
  fieldName,
  value,
  modelOptions,
  form: { getFieldDecorator }
}: IProps) => {
  return (
    <Col {...modelOptions.formSize}>
      <Form.Item
        key={fieldName}
        label={modelOptions.displayName}
        style={{ margin: "0 5px" }}
      >
        {getFieldDecorator(fieldName, {
          ...modelOptions.fieldDecoratorOptions,
          initialValue: value
        })(<Input placeholder={modelOptions.displayName} />)}
      </Form.Item>
    </Col>
  )
}

// const FormItem = Form.create()(getFormItemFunc)

export default FormItem
