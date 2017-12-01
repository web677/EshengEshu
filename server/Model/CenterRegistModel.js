
const CommonInputValidation = require('./CommonInputValidation')
const InputValidation = new CommonInputValidation()
const User = require('../DB/user')

const DB = require('./MongodbModel')

function ajaxReturn(status, data, info) {
    return {
        status: status,
        data: data,
        info: info
    }
}

const CenterRegistModel = async function (data) {

    if (!InputValidation.isName(data.username)) {
        return ajaxReturn(0, {}, "用户名请输入汉字或英文字母！")
    }

    if (!InputValidation.isPwd(data.password)) {
        return ajaxReturn(0, {}, "密码请输入英文字母或数字！")
    }

    if (data.password != data.repassword) {
        return ajaxReturn(0, {}, "两次密码输入不一致！")
    }

    const result = await DB.find({ username: data.username })

    if (result === 2001) {
        return ajaxReturn(0, {}, "用户已存在，请尝试登录")
    }

    const result1 = await DB.add(data)

    if (result1 === 3001) {
        return ajaxReturn(1, {go: "/index"}, "保存成功")
    }

    return ajaxReturn(0, {}, result1)
}

module.exports = CenterRegistModel
