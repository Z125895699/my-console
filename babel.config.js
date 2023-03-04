/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-03-04 20:45:20
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-03-04 20:45:25
 * @FilePath: /01/babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const presets = [
  [
    "@babel/env",
    {
      targets: {
        browsers: [
            "last 1 version",
            "> 1%",
            "maintained node versions",
            "not dead"
          ]
      },
      useBuiltIns: "usage",
    },
  ],
];
