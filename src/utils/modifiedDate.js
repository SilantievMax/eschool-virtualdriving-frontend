const modifiedDate = outputDate => {
  const date = new Date(outputDate)
  const getDate = date.getDate()
  const getMonth = date.getMonth() + 1
  const getfullYear = date.getFullYear()
  return `${String(getDate).length === 1 ? '0' + getDate : getDate}.${
    String(getMonth).length === 1 ? '0' + getMonth : getMonth
  }.${getfullYear}`
}

export default modifiedDate;