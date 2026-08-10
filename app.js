// JS 管"会动"：三步套路——找元素 → 定义动作 → 绑事件

// 1. 找元素：用 id 在 DOM 里抓到按钮和状态文字
const startBtn = document.getElementById("startBtn");
const statusEl = document.getElementById("status");

// 2. 定义动作：点了按钮之后干什么
function handleStart() {
  statusEl.textContent = "✅ 已开始第一轮专注，25 分钟后见！";
}

// 3. 绑事件：把"点击"和上面的函数接起来
startBtn.addEventListener("click", handleStart);
