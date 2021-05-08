/*
 * @Author: linzq
 * @Date: 2021-05-08 13:59:13
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-08 16:31:20
 * @Description:
 */
export default interface appStateTypes {
  name: String;
  count: number;
  signResult: boolean;
  signState: boolean | string;
}
