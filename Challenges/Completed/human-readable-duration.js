//https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
  if (seconds <= 0) return 'now'

  let reminderSeconds = seconds % 60
  let minute = Math.floor((seconds / 60) % 60)
  let hour = Math.floor((seconds / 60 / 60) % 24)
  let day = Math.floor((seconds / 60 / 60 / 24) % 365)
  let year = Math.floor(seconds / 60 / 60 / 24 / 365)

  const reminderSecondsExpression = `${
    reminderSeconds > 0
      ? `${reminderSeconds} second${reminderSeconds > 1 ? 's' : ''}`
      : ''
  }`
  
  const reminderMinutesExpression = `${
    minute > 0 ? `${minute} minute${minute > 1 ? 's' : ''}` : ''
  }${reminderSeconds > 0 ? ` and ${reminderSecondsExpression}` : ''}`

  const reminderHoursExpression = `${
    hour > 0 ? `${hour} hour${hour > 1 ? 's' : ''}` : ''
  }${
    minute > 0
      ? `${reminderSeconds > 0 ? ',' : ' and'} ${reminderMinutesExpression}`
      : ''
  }`

  const reminderDaysExpression = `${
    day > 0 ? `${day} day${day > 1 ? 's' : ''}` : ''
  }${
    hour > 0
      ? `${minute > 0 ? ',' : ' and'} ${reminderHoursExpression}`
      : `, ${reminderMinutesExpression}`
  }`

  const reminderYearsExpression = `${
    year > 0 ? `${year} year${year > 1 ? 's' : ''}` : ''
  }${
    day > 0
      ? `${day > 0 ? ',' : ' and'} ${reminderDaysExpression}`
      : `${reminderHoursExpression}`
  }`

  if (year >= 1) return reminderYearsExpression
  if (day >= 1) return reminderDaysExpression
  if (hour >= 1) return reminderHoursExpression
  if (minute >= 1) return reminderMinutesExpression
  if (seconds >= 1) return reminderSecondsExpression
}

console.log(formatDuration(60))
