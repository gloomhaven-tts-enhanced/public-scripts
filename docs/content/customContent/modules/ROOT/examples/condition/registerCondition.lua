local ConditionApi = require("api.ConditionApi")

function onLoad()
  ConditionApi.registerCondition("Attack", {
    image = "http://cloud-3.steamusercontent.com/ugc/1699533601343910452/EBEEF4F2DD1735088BD6C74A0CFA29532D440ED8/",
    max = 20
  })
end