import dayjs from 'dayjs'

export const isInfoProvided = value => (value !== null ? value : 'No info')

export const timeToLocal = time => (time ? dayjs(time).format('DD/MM/YYYY') : 'Invalid date')

export const getNumValue = value => {
  const num = value ? parseInt(value) : 0
  return Number.isNaN(num) ? 0 : num
}
