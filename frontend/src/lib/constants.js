export default {
  apiBaseUrl: process.env.VUE_APP_API_BASE_URL || 'https://fncapp-caption-krc.azurewebsites.net',
  region: process.env.VUE_APP_COGNITIVE_API_REGION || 'koreacentral',
  title: process.env.VUE_APP_TITLE || 'CaptionR'
}