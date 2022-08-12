local ScenarioApi = require("api.ScenarioApi")

local scenario = {
  randomPools = {
    {
      name = "Pool 1",
      type = ScenarioApi.RandomType.Card,
      -- The list of possible RDG monster cards to use for the pool
      -- One of those will be used randomly for the pool
      values = { "Corrupted", "Cutthroat", "Rotting", "Tribal" },
    }
  }
}
