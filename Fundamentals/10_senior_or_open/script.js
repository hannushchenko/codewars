function openOrSenior(data) {
  let res = []
  data.forEach(pair => {
    if (pair[0] >= 55 && pair[1] >= 7) {
      console.log(pair);
      res.push("Senior")
    }
    else {
      console.log(pair);
      res.push("Open")
    }
  })
  return res
}

console.log(openOrSenior([[1, 3], [5, 9], [60, 9]]))