const participantCode = window.prompt('請輸入受測代碼，例如 P001');

if (participantCode && participantCode.trim()) {
  const code = participantCode.trim();
  const key = 'vr-scene-order-' + code;
  let order = JSON.parse(localStorage.getItem(key) || 'null');

  if (!order) {
    order = ['A', 'B', 'C', 'D'];

    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }

    localStorage.setItem(key, JSON.stringify(order));
  }

  window.alert(
    '受測代碼：' + code +
    '\n體驗順序：' + order.join(' → ') +
    '\n請先記錄順序，再安排VR體驗及對應問卷。'
  );

  window.location.href = urls[0];
}
