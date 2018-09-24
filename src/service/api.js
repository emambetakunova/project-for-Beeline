import {baseUrl} from "../utils/constants";

export default {
  seamlessAuth: baseUrl + '/auth/seamlessAuth',
  getAccess: baseUrl + '/auth/getAccess',
  sendCode: baseUrl + '/auth/sendCode',
  validateCode: baseUrl + '/auth/validateCode',
  rate: baseUrl + '/rating/rate'
}
