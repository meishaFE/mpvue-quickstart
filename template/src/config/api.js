// 开发环境
const DEV = Symbol('dev');
// 测试环境
const TEST = Symbol('test');
// 预发布环境
const PRE = Symbol('pre');
// 正式环境
const PROD = Symbol('prod');

// 当前环境
const CURRENT_ENV = PROD;

// 是否为开发环境
export const IS_DEV = CURRENT_ENV === DEV;

// 是否为测试环境
export const IS_TEST = CURRENT_ENV === TEST;

// 是否为预发布环境
export const IS_PRE = CURRENT_ENV === PRE;

// 是否为正式环境
export const IS_PROD = CURRENT_ENV === PROD;

// 环境
export const ENV = {
  IS_DEV,
  IS_TEST,
  IS_PRE,
  IS_PROD
};

// 各个环境的 URL 列表
const URL_SET = {
  [DEV]: {
    API_BASE_URL: 'https://vito-evaluate2.meishakeji.com'
  },
  [TEST]: {
    API_BASE_URL: 'https://test-evaluate2.meishakeji.com'
  },
  [PRE]: {
    API_BASE_URL: 'https://pre-evaluate2.meishakeji.com'
  },
  [PROD]: {
    API_BASE_URL: 'https://evaluate2.meishakeji.com'
  }
};

// 接口 base URL
const API_BASE_URL = (URL_SET[CURRENT_ENV] && URL_SET[CURRENT_ENV].API_BASE_URL) || '';

export const BASE_URL = API_BASE_URL;

// 接口
export const API = {
  // 接口格式
  // LOGIN: '/api/wx/mini/account/login'
};
