local ScenarioApi = require("api.ScenarioApi")

local scenario = {
  -- The list of random pool
  randomPools = {
    {
      -- The name is used later to draw from that pool
      name = "Pool 1",
      -- The type determines what values need to set for the pool
      type = ScenarioApi.RandomType.Tokens,
      -- The objective tokens that should be used for the pool
      values = { 1, 2, 3, 4, 5, 6 }
    },
    -- another random pool
    {
      name = "Pool 2",
      type = ScenarioApi.RandomType.Tokens,
      values = { 7, 8, 9, 10 }
    }
  }
}
