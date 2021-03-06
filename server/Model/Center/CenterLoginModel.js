
const CommonInputValidation = require('../Common/CommonInputValidation')
const CommonLoginModel = require('../Common/CommonLoginModel')
const InputValidation = new CommonInputValidation()

const User = require('../../DB/user')
const DB = require('../Common/MongodbModel')

function ajaxReturn(status = 1, info = "success", data = {} ){
    return {
        status: status,
        info: info,
        data: data
    }
}

const CenterLoginModel = async function(data, host, ctx) {

    if (!InputValidation.isName(data.username)) {
        return ajaxReturn(0, "用户名请输入汉字或英文字母！")
    }

    if (!InputValidation.isPwd(data.password)) {
        return ajaxReturn(0, "密码请输入英文字母或数字！")
    }

    const result = await DB.find({ username: data.username }, User)

    if (result !== 4001 && result !== 2001) {
        return ajaxReturn(0, result)
    }

    if (result === 4001){
        return ajaxReturn(0, "用户不存在，请前往注册")
    }

    const result1 = await DB.find(data, User)

    if (result !== 4001 && result !== 2001) {
        return ajaxReturn(0, result1)
    }

    if (result1 === 2001) {
        CommonLoginModel.doLogin(data.username, ctx)
        return ajaxReturn(1, "登录成功", { go: "//" + host + "/index" })
    }

    if (result1 === 4001) {
        return ajaxReturn(0, "账号或密码输入错误")
    }
}

module.exports = CenterLoginModel
