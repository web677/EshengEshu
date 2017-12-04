const superagent = require('superagent')
const cheerio = require('cheerio')

const jobs = require('../../Config/jobs')

const GetJobsModel = async () => {
    var list = []
    for(let i = 0; i < jobs.length; i++){
        for (let p = 1; p <= 10; p++){
            let _url = jobs[i] + p
            let _result = await superagent.get(_url)
            let $ = cheerio.load(_result.text)

            $(".newlist").each((i, element) => {
                let $this = $(element)
                let ele = $this.find(".zwmc a").eq(0)
                ele.text() && list.push({
                    name: ele.text(),
                    link: ele.attr("href"),
                    salary: $this.find(".zwyx").text(),
                    address: $this.find(".gzdd").text(),
                    company: $this.find(".gsmc").text(),
                    id: $this.find("input[name='vacancyid']").val(),
                    size: $this.find(".newlist_deatil_two span").eq(2).text().replace("公司规模：", "")
                })
            })
        }
    }

    return {
        status: 1,
        data: list,
        info: "success"
    }
}

module.exports = GetJobsModel
