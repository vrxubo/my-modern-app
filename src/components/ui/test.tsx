function Square() {
  return (
    <div className="aspect-square bg-sky-300 [active]:hover:bg-sky-400 w-4" />
  );
}

export default Square;
// 使用 react + tailwindcss 实现以下功能
// 1. 画一个方块
// 2. 生成一个随机数，随机数的值从0-10000之间
// 3. 根据随机数的值设置方块的颜色
// 4. 随机数的值在 [0,1000)之间,方块的颜色是 bg-sky-100
// 5. 随机数的值在 [1000,2000)之间,方块的颜色是 bg-sky-200
// 6. 依次类推，直到随机数的值在 [9000,10000)之间,方块的颜色是 bg-sky-1000
// 7. 点击方块时重新生成随机数，重新设置方块的颜色
