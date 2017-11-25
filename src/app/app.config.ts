import { InjectionToken } from '@angular/core'

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config')

export interface AppConfig {
  apiEndpoint: string
  title: string
}

export const API_DI_CONFIG: AppConfig = {
  apiEndpoint: 'http://',
  title: 'Base Api'
}

