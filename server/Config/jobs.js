const jobs = [
    "http://sou.zhaopin.com/jobs/searchresult.ashx?bj=160000&jl=538&sm=0&pd=1&we=0103&isfilter=1&et=2&sg=6387c008aea6418b9bc3fd60fb156165&p=",

]

/* 
    智联
    bj:{
        2060000: "财务/会计",
        160000: "web前端开发"
        ...
    },
    isfilter=1&sm=0:{
        没搞明白是啥意思，好像也不重要
    },
    jl: {
        538: 上海,
        ...
    },
    sf&st: {
        -1: 不限,
        1-9999: 太多了，不写了
    },
    ct: {
        -1: 不限,
        1-16: 太多了，懒得写
    }
    el: {
        -2: 不限,
        -1: 无学历要求,
        7: 高中/中专/中技及以下,
        5: 大专及同等学历,
        4: 本科/学士及等同学历,
        3: 硕士/研究生及等同学历,
        1: 博士及以上,
        8: 其他
    },
    we: {
        -1: 不限,
        0000: 无经验,
        0001: 1年以下,
        0103: 1-3年,
        0305: 3-5年,
        0510: 5-10年,
        1099: 10年以上
    },
    et: {
        -1: 不限,
        2: 全职,
        1: 兼职,
        4: 实习,
        5: 校园
    },
    pd: {
        -1: 不限,
        1: 今天,
        3: 最近三天,
        7: 最近一周,
        30: 最近一个月
    }
*/
module.exports = jobs