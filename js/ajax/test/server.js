const express = require('express')
const app = express()
const port = 3000

// 跨域
const cors = require('cors')
app.use(cors())

app.get('/login', (req, res) => {
  // console.log(req.query);
  const username = req.query.username
  const password = req.query.password
  if (!username || !password) {
    res.send('用户名或密码不能为空')
    return
  }
  console.log(`当前登录账号是：${username}, 密码是：${password}`);
  

  res.json({
    msg: '恭喜你，登录成功！'
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})