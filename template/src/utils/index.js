export function formatNumber (n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
};

export function formatTime (date, type = 0) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const week = date.getDay();
  let t1;
  let t2;
  switch (type) {
    case 0: // YYYY/MM/dd hh:mm:ss
      t1 = [year, month, day].map(formatNumber).join('/');
      t2 = [hour, minute, second].map(formatNumber).join(':');
      return `${t1} ${t2}`;
    case 1: // YYYY.MM.dd
      return [year, month, day].map(formatNumber).join('.');
    case 2: // hh:mm
      return [hour, minute].map(formatNumber).join(':');
    case 3: // YYYY.MM.dd e
      t1 = [year, month, day].map(formatNumber).join('.');
      t2 = `周${['日', '一', '二', '三', '四', '五', '六'][week]}`;
      return `${t1} ${t2}`;
    case 4: // YYYY-MM-dd hh:mm:ss
      t1 = [year, month, day].map(formatNumber).join('-');
      t2 = [hour, minute, second].map(formatNumber).join(':');
      return `${t1} ${t2}`;
  }
};

export const getCdnUrl = (path) => {
  return `https://cdn.meishakeji.com/${path}`;
};
