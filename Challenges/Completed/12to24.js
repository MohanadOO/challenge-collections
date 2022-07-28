function convertTime(time) {
  const [hour, min] = time.split(':')

  if (time.includes('am') || time.includes('pm')) {
    const [minutes, date] = min.split(' ')
    if (Number(hour) + 12 == 24 && date === 'am') return `00:${minutes}`
    else if (date === 'am') return `${hour}:${minutes}`
    else if (Number(hour) + 12 == 24 && date === 'pm') return `12:${minutes}`
    return `${Number(hour) + 12}:${minutes}`
  } else if (hour == 24) {
    return `12:00 am`
  } else if (hour > 12) {
    return `${hour - 12}:${min} pm`
  } else return `${hour}:${min} am`
}

console.log(convertTime('00:00'))
