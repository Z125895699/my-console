/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-03-04 20:08:49
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-03-04 23:21:04
 * @FilePath: /01/src/index.js
 * npm adduser
 * npm publish
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class fuguiConsole{
  constructor(options){
    let defaultOptions = '你好👋'
    this.options = options ? options : defaultOptions
    this.initConsole()
  }
  initConsole(){
    console.log(`${this,this.options}`)
  }
}
export default fuguiConsole
