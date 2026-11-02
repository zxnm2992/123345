(function () {
  const fixedOrders = Object.freeze({
  "111": "ABCD",  
  "W001": "BCAD",
  "W002": "DACB",
  "W003": "CDAB",
  "W004": "BDCA",
  "W005": "ACDB",
  "W006": "ACDB",
  "W007": "CBDA",
  "W008": "BACD",
  "W009": "CDBA",
  "W010": "DACB",
  "W011": "ABCD",
  "W012": "DBCA",
  "W013": "BADC",
  "W014": "CBDA",
  "W015": "ABCD",
  "W016": "CABD",
  "W017": "BCDA",
  "W018": "DCBA",
  "W019": "DBCA",
  "W020": "ADCB",
  "W021": "CDAB",
  "W022": "BACD",
  "W023": "CADB",
  "W024": "DCAB",
  "W025": "ADBC",
  "W026": "ACBD",
  "W027": "CABD",
  "W028": "BCDA",
  "W029": "ADCB",
  "W030": "ACBD",
  "W031": "CBAD",
  "W032": "ABDC",
  "W033": "CBAD",
  "W034": "CADB",
  "W035": "BDCA",
  "W036": "DABC",
  "W037": "ABDC",
  "W038": "CDBA",
  "W039": "BCAD",
  "W040": "ADBC",
  "W041": "DBAC",
  "W042": "DCBA",
  "W043": "BDAC",
  "W044": "DABC",
  "W045": "DBCA",
  "W046": "BDAC",
  "W047": "DCAB",
  "W048": "BADC",
  "W049": "DBAC",
  "W050": "BADC"
});

  const formUrl = typeof urls !== 'undefined' && Array.isArray(urls) ? urls[0] : '';
  if (typeof formUrl !== 'string' || !formUrl.startsWith('https://')) {
    window.alert('問卷連結尚未設定，請聯絡研究人員。');
    return;
  }

  let code;
  while (true) {
    const entered = window.prompt('請輸入研究人員提供的受測代碼，例如P001。');
    if (entered === null) return;

    const input = entered.trim().toUpperCase();
    const match = input.match(/^W(\d{1,3})$/);
    code = input === '111' ? '111' : (match ? 'W' + String(Number(match[1])).padStart(3, '0') : '');
    if (Object.prototype.hasOwnProperty.call(fixedOrders, code)) break;
    window.alert('請輸入受測代碼，例如P001。');
  }

  const order = fixedOrders[code].split('');
  window.alert(
    '受測代碼：' + code +
    '\n體驗順序：' + order.join(' → ') +
    '\n請先記錄順序，按確定後進入問卷填寫基本資料。'
  );
  window.location.href = formUrl;
})();
