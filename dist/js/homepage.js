function _S() {
  document.querySelectorAll('.paper--stateinfo-listtab').forEach((a, i) => {
    a.addEventListener("mouseover", () => {
      document.querySelectorAll('.paper--stateinfo-listcontent').forEach(a => a.style.display = "none")
      if(!document.querySelectorAll('.paper--stateinfo-listcontent')[Number(i)]) return
      document.querySelectorAll('.paper--stateinfo-listcontent')[Number(i)].style.display = "block"
    })
  })
}
_S()