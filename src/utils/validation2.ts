/* eslint-disable no-array-constructor */

// TAG: level2
export function validatePersonalIdLevel2(id: string, type: 'R' | 'I'): boolean {
  if (id.length !== 10) return false
  const tab = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
  const A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3)
  const A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5)
  const Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1)

  // 比對第一個字母是否為英文字母
  let i = tab.indexOf(id.charAt(0))
  if (i === -1) return false
  let sum = A1[i] + A2[i] * 9

  // 比對第二碼
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

export function validateResidencePermitLevel2(id: string): boolean {
  if (id.length !== 10) return false
  // 比對前二個字母是否為英文字母, 後8個是數字
  if (isNaN(Number(id.substr(2, 8))) || !/^[A-Z]$/.test(id.substr(0, 1)) || !/^[A-Z]$/.test(id.substr(1, 1)))
    return false

  const idHeader = 'ABCDEFGHJKLMNPQRSTUVXYWZIO' // 按照轉換後權數的大小進行排序
  // 這邊把身分證字號轉換成準備要對應的
  const verifyNum =
    idHeader.indexOf(id.substring(0, 1)) +
    10 +
    '' +
    ((idHeader.indexOf(id.substr(1, 1)) + 10) % 10) +
    '' +
    id.substr(2, 8)
  // 開始進行身分證數字的相乘與累加，依照順序乘上1987654321
  const digitList = verifyNum.split('').map(function (digit) {
    return parseInt(digit)
  })
  let sum = 0
  for (let i = 0; i < 10; i++) {
    i === 0 ? (sum += digitList[i]) : (sum += digitList[i] * (10 - i))
  }
  // 檢查號碼 = 10 - 相乘後個位數相加總和之尾數。
  const checkNum = parseInt(id.substr(10, 1))

  const checkCode = (10 - (sum % 10)) % 10

  return checkCode === parseInt(id.substr(9, 1))
}
