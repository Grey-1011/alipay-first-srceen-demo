// Pull down to refresh
const refreshContainer = document.getElementById("refreshContainer");
const refreshAnimation = document.getElementById("refreshAnimation");

let startY = 0;
let isRefreshing = false;

refreshContainer.addEventListener("touchstart", (e) => {
  if (!isRefreshing) {
    startY = e.touches[0].clientY;
  }
});

refreshContainer.addEventListener("touchmove", (e) => {
  if (!isRefreshing) {
    const currentY = e.touches[0].clientY;
    const distance = currentY - startY;

    if (distance > 50) {
      refreshAnimation.style.display = 'block';
    } else {
      // refreshContent.innerText = "下拉刷新";
    }
  }
});

refreshContainer.addEventListener("touchend", () => {
  if (!isRefreshing) {
    isRefreshing = true;
    // refreshContent.innerText = "刷新中...";

    // 模拟加载数据
    setTimeout(() => {
      // 完成刷新操作后的处理
      // refreshContent.innerText = "下拉刷新";
      isRefreshing = false;
    }, 1500);
  }
});
