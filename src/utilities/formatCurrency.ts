import React from 'react'
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: 'EUR', style: 'currency'})

export default function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}