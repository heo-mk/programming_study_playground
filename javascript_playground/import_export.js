// import, from, export, default : 모듈 관리 전용 키워드

const moment = require("moment");
import moment from "moment";

// 내보내기 : currency-functions.js
const exchangeRate = 0.91;

// 안 내 보내는 것
function roundTwoDecimals(amount) {
  return Math.round(amount * 100) / 100;
};

// 내보내기 1
export function canadianToUS(canadian) {
  return roundTwoDecimals(canadian * exchangeRate);
};

// 내보내기 2
const usToCanadian = function() {
  return roundTwoDecimals(us / exchangeRate);
};
export {usToCanadian};

// 불러오기 : test-currency-functions.js 
// Destructuring
import { canadianToUS } from "./currency-functions";

console.log('dfdfdfdfdf');
console.log(canadianToUS(50));

// Alias
import * as currency from "./currency-functions";

console.log("30 USDFDFF ");
console.log(currency.usToCanadian(30));

// export default 
const exchangeRate = 0.91;

// 안 내 보내는 것
function roundTwoDecimals(amount) {
  return Math.round(amount * 100) / 100;
};

// 내보내기
export default {
  canadianToUS(canadian) {
    return roundTwoDecimals(canadian * exchangeRate);
  },

  usToCanadian: function(us) {
    return roundTwoDecimals(us/exchangeRate);
  },
}

const obj = {
  canadianToUS(canadian) {
    return roundTwoDecimals(canadian * exchangeRate);
  },
};

obj.usToCanadian = function(us) {
  return roundTwoDecimals(us / exchangeRate);
};
export default obj;

import currency from "./currency-object";

