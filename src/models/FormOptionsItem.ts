import { GetFieldDecoratorOptions, ValidationRule } from "antd/lib/form/Form"
import { formSize } from "./formSize"

export default class FormOptionsItem {
  displayName: string
  options: ValidationRule
  formSize: formSize

  constructor(
    displayName: string,
    options: ValidationRule = {},
    formSize: formSize = { sm: 24, xs: 24 }
  ) {
    this.displayName = displayName
    this.options = options
    this.formSize = formSize
  }

  get fieldDecoratorOptions(): GetFieldDecoratorOptions {
    return {
      rules: [
        {
          required: this.options.required,
          message: `Поле ${this.displayName} является обязательным для заполнения`
        },
        {
          min: this.options.min,
          message: `Поле ${this.displayName} должно быть длиннее ${this.options.min} символов`
        },
        {
          max: this.options.max,
          message: `Поле ${this.displayName} должно быть короче ${this.options.max} символов`
        },
        {
          type: this.options.type
        }
      ]
    }
  }
}
