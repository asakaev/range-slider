/**
 * Search DOM element with 'range' id
 */
const rangeElem = document.getElementById('range')

/**
 * Search DOM element with 'text' id
 */
const textElem = document.getElementById('text')

/**
 * Lower range value
 */
const Lower = 0

/**
 * Upper range value
 */
const Upper = 1000


/**
 * Returns true if string is a number
 */
const isNumber = s => !isNaN(s)

/**
 * Returns true if string is empty
 */
const isEmpty = s => s.length == 0

/**
 * Returns a number unchanged if it is in the Lower to Upper range.
 * Returns Lower value if the number is less than the Lower value.
 * Returns Upper value if the number is greater than the Upper value.
 */
const clamp = n => {
  const n1 = Math.max(Lower, n)
  const n2 = Math.min(n1, Upper)
  return n2
}

/**
 * Update textElem value to rangeElem value
 */
const rangeHandler = _ => {
  textElem.value = rangeElem.value
}

/**
 * Replace textElem with Lower value if it is an empty string
 * Replace textElem with rangeElem value if it's not a number
 * Clamp textElem number to [0, 1000] range
 * Update textElem to clamped value
 * Update rangeElem value
 */
const textHandler = _ => {
  const s = textElem.value
  const v0 = rangeElem.value

  const v1 = isEmpty(s) ? Lower : s
  const v2 = isNumber(v1) ? clamp(v1) : v0

  textElem.value = v2
  rangeElem.value = v2
}


/**
 * Update initial rangeElem value to Lower value
 */
rangeElem.value = Lower

/**
 * Update initial textElem value to rangeElem value
 */
textElem.value = rangeElem.value


/**
 * Subscribe to rangeElem events
 */
rangeElem.addEventListener('input', rangeHandler, false)

/**
 * Subscribe to textElem events
 */
textElem.addEventListener('input', textHandler, false)
