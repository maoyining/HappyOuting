function handleTime(s){
  let second
  s < 10 ? second = '0'+s :second=s
  return second
}

function handleHour(h){
  let hour
  h<=12 ? hour='上午'+h : hour ='下午'+(h-12)
  return hour
}
function getNowTime() {
  const date = new Date()
  const month = date.getMonth()+1
  const day = date.getDate()
  const hour = handleHour(date.getHours())
  const minute = handleTime(date.getMinutes())
  const second = handleTime(date.getSeconds())
  const time=`当前时间：${month}月${day}日 ${hour}:${minute}:${second}`
  const ele = document.getElementById('time')
  ele.innerText=time
}
setInterval(function(){getNowTime()},1000)
