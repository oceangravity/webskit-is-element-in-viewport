module.exports.isInViewport = function (element, container) {
  const eRect = element.getBoundingClientRect()
  const cRect = container.getBoundingClientRect()
  const top = (eRect.bottom - cRect.top) / eRect.height * 100
  const bottom = (cRect.bottom - eRect.top) / eRect.height * 100
  const left = (eRect.right - cRect.left) / eRect.width * 100
  const right = (cRect.right - eRect.left) / eRect.width * 100
  return {
    top: top > 100 ? 100 : top,
    bottom: bottom > 100 ? 100 : bottom,
    left: left > 100 ? 100 : left,
    right: right > 100 ? 100 : right,
    inView: !((eRect.top > cRect.bottom || eRect.bottom < cRect.top) || (eRect.left > cRect.right || eRect.right < cRect.left))
  }
}
