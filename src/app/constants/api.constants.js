// base_url_prod = 'http://103.228.134.30:8085'
// base_url_local = 'http://172.16.34.108:8083'
// base_url_real = 'http://103.23.31.34:8080'
export const BASE_URL='https://api.hullor.io'
export const GET_ORGANIZATION_LIST = `${BASE_URL}/api/organization/search`
export const GET_ROLE_LIST = `${BASE_URL}/api/role/search`
export const UPLOAD_IMAGE_BASE64 = `${BASE_URL}/api/image/upload`
export const CREATE_USER = `${BASE_URL}/api/user/create`
export const GET_ALL_PERMISSION = `${BASE_URL}/api/module/getAll`
export const GET_ALL_BRAND = `${BASE_URL}/api/brand/getAllByOrganization`
export const GET_ACTIVATION_DASHBOARD_DATA = `${BASE_URL}/api/subscriber/dashBoard`
export const GET_MODEL_LIST = `${BASE_URL}/api/model/byOrganizationId`
export const GET_GAME_REVENUE_CHART = `${BASE_URL}/api/revenue/chart`
export const GET_KEYWORDS = `${BASE_URL}/api/pushpull/keywords`
// export const GET_MAIN_DASHBOARD_DATA = `${BASE_URL}/api/dashBoard/`
export const GET_ACTIVATION_REPORT_SUMMARY = `${BASE_URL}/api/subscriber/search/summary`
export const GET_PUSHPULL_REPORT_SUMMARY = `${BASE_URL}/api/pushpull/search/summary`
export const GET_GAME_REPORT_SUMMARY = `${BASE_URL}/api/revenue/search/summary`
export const CHANGE_PASSWORD = `${BASE_URL}/api/user/changePassword`
export const REQUEST_DOWNLOAD = `${BASE_URL}/api/subscriber/download`
export const GET_DOWNLOAD_LIST = `${BASE_URL}/api/subscriber/report/search`
