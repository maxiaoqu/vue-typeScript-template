export const echartsResize = (echartsDemo: any) => {
  window.addEventListener('resize', () => {
    echartsDemo.resize()
  })

  // 这种写法只生效最后一个
  // window.onresize = function () {
  //   echartsDemo.resize();
  // }
}
