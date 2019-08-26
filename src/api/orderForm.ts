import Axios from 'axios'
import { OrderFormDto } from '../models/OrderFormDto'



const orderFormApi = {
  sendOrderForm: (dto: OrderFormDto): any => 
    Axios.post<any>('/test.php', dto),
}

export default orderFormApi
