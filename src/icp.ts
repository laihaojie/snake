const icp = document.querySelector('.icp')
const host_name = location.hostname
if (host_name.includes('laihaojie.top')) {
  icp.textContent = '沪ICP备2022020790号-1'
} else if (host_name.includes('laihaojie.com')) {
  icp.textContent = '沪ICP备2022020790号-2'
} else {
  icp.textContent = '沪ICP备16007007号-16'
}