import * as React from "react"
import { Form } from "antd"
import { WrappedFormUtils } from "antd/lib/form/Form"
import FormItem from "./FormItem"

interface IProps {
  model: any
  modelOptions: any
  showFields?: string[]

  form: WrappedFormUtils
}

const FormModel = ({ model, modelOptions, showFields, form }: IProps) => {
  if (!showFields) {
    showFields = Object.keys(modelOptions)
  }

  return (
    <>
      {showFields.map(field => (
        <FormItem
          key={field}
          fieldName={field}
          value={model[field]}
          modelOptions={modelOptions[field]}
          form={form}
        />
      ))}
    </>
  )
}

export default FormModel // Form.create<IProps>()(FormModel)
