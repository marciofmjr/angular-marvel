export interface Alert {
  action: 'open' | 'close',
  type: 'success' | 'error' | 'warning'
  message: string
}

export interface AlertOpen {
  type: 'success' | 'error' | 'warning',
  message: string
}
