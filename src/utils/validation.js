/* eslint-disable no-array-constructor */

// TAG: level0
export function validatePersonalIdLevel0(id, type) {
  if (id.length !== 10) return false
  const tab = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
  const A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3)
  const A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5)
  const Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1)
  let i = tab.indexOf(id.charAt(0))
  if (i === -1) return false
  let sum = A1[i] + A2[i] * 9
  const isSecondDigitCorrect =
    type.toUpperCase() === 'I' ? ['1', '2'].includes(id.charAt(1)) : ['8', '9'].includes(id.charAt(1))
  if (!isSecondDigitCorrect) return false
  for (i = 1; i < 10; i++) {
    const v = parseInt(id.charAt(i))
    if (isNaN(v)) return false
    sum = sum + v * Mx[i]
  }
  if (sum % 10 !== 0) return false
  return true
}
function validateResidencePermitLevel0(id) {
  if (id.length !== 10) return false
  if (isNaN(id.substr(2, 8)) || !/^[A-Z]$/.test(id.substr(0, 1)) || !/^[A-Z]$/.test(id.substr(1, 1))) return false
  let verifyNum = 0
  const idHeader = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
  verifyNum =
    idHeader.indexOf(id.substring(0, 1)) +
    10 +
    '' +
    ((idHeader.indexOf(id.substr(1, 1)) + 10) % 10) +
    '' +
    id.substr(2, 8)
  const digitList = verifyNum.split('').map(function (digit) {
    return parseInt(digit)
  })
  let sum = 0
  for (let i = 0; i < 10; i++) {
    i === 0 ? (sum += digitList[i]) : (sum += digitList[i] * (10 - i))
  }
  const checkNum = parseInt(id.substr(10, 1))
  verifyNum = (10 - (sum % 10)) % 10
  return verifyNum === parseInt(id.substr(9, 1))
}

// TAG: level1
/**
 * 檢驗 - 身份證號 and (新式)居留證證號
 * 第二碼(性別): 身份證號 （0,1），新式居留證（8，9）
 * @param {string} id
 * @param {string} type I: 身份證, R: 新式居留證
 * @returns {boolean} 證驗證格式通過 / 不通過
 */
export function validatePersonalIdLevel1(id, type) {
  if (id.length !== 10) return false
  const tab = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
  const A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3)
  const A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5)
  const Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1)
  let i = tab.indexOf(id.charAt(0))
  if (i === -1) return false
  let sum = A1[i] + A2[i] * 9
  const isSecondDigitCorrect =
    type.toUpperCase() === 'I' ? ['1', '2'].includes(id.charAt(1)) : ['8', '9'].includes(id.charAt(1))
  if (!isSecondDigitCorrect) return false
  for (i = 1; i < 10; i++) {
    const v = parseInt(id.charAt(i))
    if (isNaN(v)) return false
    sum = sum + v * Mx[i]
  }
  if (sum % 10 !== 0) return false
  return true
}
/**
 * 檢驗 - (舊式)居留證證號
 *
 * @param {String} id
 * @returns {boolean} 證驗證格式通過 / 不通過
 */
function validateResidencePermitLevel1(id) {
  if (id.length !== 10) return false
  if (isNaN(id.substr(2, 8)) || !/^[A-Z]$/.test(id.substr(0, 1)) || !/^[A-Z]$/.test(id.substr(1, 1))) return false
  let verifyNum = 0
  const idHeader = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
  verifyNum =
    idHeader.indexOf(id.substring(0, 1)) +
    10 +
    '' +
    ((idHeader.indexOf(id.substr(1, 1)) + 10) % 10) +
    '' +
    id.substr(2, 8)
  const digitList = verifyNum.split('').map(function (digit) {
    return parseInt(digit)
  })
  let sum = 0
  for (let i = 0; i < 10; i++) {
    i === 0 ? (sum += digitList[i]) : (sum += digitList[i] * (10 - i))
  }
  const checkNum = parseInt(id.substr(10, 1))
  verifyNum = (10 - (sum % 10)) % 10
  return verifyNum === parseInt(id.substr(9, 1))
}
