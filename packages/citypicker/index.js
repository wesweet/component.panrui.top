/*
 * @Description: 三级联动
 * @Author: panrui
 * @Date: 2021-06-03 15:45:51
 * @LastEditTime: 2023-04-17 09:00:12
 * @LastEditors: panrui
 * 不忘初心,不负梦想
 */
import PrCityPicker from "./src/CityPicker";
PrCityPicker.install = (Vue) => {
  Vue.component(PrCityPicker.name, PrCityPicker);
};
export default PrCityPicker;
