import FormOptionsItem from "./FormOptionsItem"

export interface OrderFormDto {
  firstName?: string
  lastName?: string
  phoneNumber?: string
  email?: string

  country?: string
  city?: string
  postcode?: string
  address?: string
  deliveryDate?: Date

  comment?: string
}

export const OrderFormDtoOptions = {
  firstName: new FormOptionsItem("Имя", {
    required: true,
    min: 2,
    max: 255
  }, {xs: 24, sm: 12}),
  lastName: new FormOptionsItem("Фамилия", {
    required: true,
    min: 2,
    max: 255
  }, {xs: 24, sm: 12}),
  phoneNumber: new FormOptionsItem("Телефон", {
    required: true,
  }),
  email: new FormOptionsItem("Email", {
    required: true,
    type: "email"
  }),

  country: new FormOptionsItem("Страна", {
    required: true
  }, {xs: 24, sm: 8}),
  city: new FormOptionsItem("Город", {
    required: true,
    min: 2,
    max: 255
  }, {xs: 24, sm: 8}),
  postcode: new FormOptionsItem("Индекс ", {
    required: true,
    min: 6,
    max: 6
  }, {xs: 24, sm: 8}),
  deliveryDate: new FormOptionsItem("Адрес ", {
    required: true,
    min: 2,
    max: 255
  }),
  address: new FormOptionsItem("Дата доставки", {
    required: true,
    type: "date"
  }),

  comment: new FormOptionsItem("Комментарий к заказу"),
}
