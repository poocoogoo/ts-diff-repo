# 测试用例

## React Native 测试用例
| 序号 | begin commit | end commit | 期望结果 | 
| ---- | ------------- | -------- | --------- |
| 1    |      a631d35f682d496eac9886ff869534429fba6788         |    d8c4a54d76864fb750ad0ee2590a7588e0c56a15      |    不涉及多端      | 
| 2    |       d8c4a54d76864fb750ad0ee2590a7588e0c56a15        |      3fd4daa4c0fd6caa316146879f29077480753144    |    涉及多端   引入了iOS逻辑    |
| 3    |       3fd4daa4c0fd6caa316146879f29077480753144        |    bff6cc562563e973a37e8e0258ad56baa9ffcc90      |    涉及多端   新增了Android逻辑     |
| 4    |        bff6cc562563e973a37e8e0258ad56baa9ffcc90       |    dc2d280c499cf6d4ac60cd763713720de8ae2d5b      |    不涉及多端      |
| 5    |       dc2d280c499cf6d4ac60cd763713720de8ae2d5b        |    e803256ab3127d3f77b9b60b99edfbc5f9634368      |    涉及多端   新增了iOS逻辑      |
| 6    |            e803256ab3127d3f77b9b60b99edfbc5f9634368   |     8a04ddf4911bbe18a0325a2e7792370114a77941     |    涉及多端   删除了iOS逻辑      |
| 7    |             8a04ddf4911bbe18a0325a2e7792370114a77941  |     6ce99f3cc457ab01c030c383f90a322e56bceb51     |    不涉及多端   涉及多端 -> 不涉及多端 删掉了有多端差异逻辑，render函数是多端复用的      |
| 8    |            6ce99f3cc457ab01c030c383f90a322e56bceb51   |    a78077c721951705733bf16b54b0e4e61295241c      |    不涉及多端   引用了一个工具类，新增了一个变量，但是变量未使用      |
| 9    |            a78077c721951705733bf16b54b0e4e61295241c   |   9e3d05e477483f468c928c4956c997a97dcf4b1e       |    涉及多端  从另一模块引用了多端差异的变量      |
| 10    |            9e3d05e477483f468c928c4956c997a97dcf4b1e   |     995ad3f6a0074cadd3fbbbf7db6e04be49eeb0c5     |    涉及多端  这个变量被引用（有使用），并且当前的commit改动了里面的逻辑       |
| 11    |       995ad3f6a0074cadd3fbbbf7db6e04be49eeb0c5        |     7ee0f88526182faeb514184c6d388c2695abcf07     |    涉及多端  新增iOS逻辑       |
| 12    |           7ee0f88526182faeb514184c6d388c2695abcf07    |   584717a6f7e1b6414ccdf2c7ac422409dac32c53       |    涉及多端  新增Android 逻辑       |
| 13    |          584717a6f7e1b6414ccdf2c7ac422409dac32c53     |     d17c36210e7ad0513c25a388864518e2163e48b9     |    涉及多端  引用外部函数       |
| 14    |          d17c36210e7ad0513c25a388864518e2163e48b9     |     7d994c22e494489077f4e5e669b6bd87c70ce574     |    涉及多端  修改了函数，是iOS专有业务逻辑       |
| 15    |         7d994c22e494489077f4e5e669b6bd87c70ce574      |      9cd17729b15b01bab4816a0f34a054a3ef18c514    |    不涉及多端  删掉了多端差异的调用       |
| 16    |       9cd17729b15b01bab4816a0f34a054a3ef18c514        |    31ae5c7c383ee2f00502477f1e54a8defe80c450      |    涉及多端  新增了业务端的逻辑       |
| 17    |         31ae5c7c383ee2f00502477f1e54a8defe80c450      |      5d66239dded85ed44348d42b1181d61926c5b4ef    |    不涉及多端  修改了通用逻辑       |
| 18    |           5d66239dded85ed44348d42b1181d61926c5b4ef    |      27c407f2e95bfa7a8648e7ef48495dc5a66125db    |    不涉及多端       |
| 19    |          27c407f2e95bfa7a8648e7ef48495dc5a66125db     |     918ea03b02abc85e4b0580bbd2340f8f923b3cc5     |    涉及多端  采用变量引用，并且关联的 targetScheme受到影响。【需要输出提示】     |
| 20    |         918ea03b02abc85e4b0580bbd2340f8f923b3cc5      |    e7e2fe83c825a77a428df694aa6136223d43eb3f      |    不涉及多端  删掉业务端代码逻辑       |
| 21    |        e7e2fe83c825a77a428df694aa6136223d43eb3f       |     de73eb2f572331382759d0bfb99585874d2e7f27     |    涉及多端  引用了多端差异的函数      |
| 22    |       de73eb2f572331382759d0bfb99585874d2e7f27        |     903caf55f657cfbeadb1fcb5dc5aee47955be5c6     |    涉及多端  调用了子包的多端差异的函数      |
| 23    |       903caf55f657cfbeadb1fcb5dc5aee47955be5c6        |     2a4c70bef4e2ec15e7fa3ede32fcae4fa4f053ce     |    涉及多端  调用了NativeModule，shareModule是一个多端差异的函数      |



## Mach 测试用例
| 序号 | begin commit | end commit | 期望结果 | 
| ---- | ------------- | -------- | --------- |
| 1    |    2a4c70bef4e2ec15e7fa3ede32fcae4fa4f053ce           |   2b482f44e93b69fc518500c8fdedeb0e5075418a       |     不涉及多端     | 
| 2    |    2b482f44e93b69fc518500c8fdedeb0e5075418a           |   0a64181674a86ba23f59cbe4fd6f1ceeee40936a       |     涉及多端  引入了iOS和Android 不同平台的逻辑     | 
| 3    |    0a64181674a86ba23f59cbe4fd6f1ceeee40936a           |   5e58cbba4c450f81da9dac3cbff0f7f04e6b9722       |     涉及多端  Image组件的属性里有iOS和Android不同的属性值     | 
| 4    |    5e58cbba4c450f81da9dac3cbff0f7f04e6b9722           |   848fa182530c1b080e2a7972bfd049fd955d0fb7       |     涉及多端  Mach 调用了TS与Native通信的桥，包含了多端差异的代码     | 
