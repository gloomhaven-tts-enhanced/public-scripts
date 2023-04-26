local ScenarioApi = require("api.ScenarioApi")
local R = require("api.Resource")

local scenario = {
  randomPools = {
    {
      name = "Pool 1",
      type = ScenarioApi.RandomType.Objects,
      objects = {
        {
          -- a trap element
          element = {
            type = R.ElementType.Trap,
            name = "Bear Trap",
            -- will set the trap damage according to scenario level
            damage = "Auto",
            conditions = { "Stun" }
          },
          placement = {
            rotation = { 0, 180, 0 },
          }
        },
        {
          element = {
            type = R.ElementType.Enemy,
            name = "Forest Imp",
            -- character count dependent settings for this element
            characterCount = {
              [2] = R.Remove,
              [3] = { difficulty = "normal" },
              [4] = { difficulty = "elite" },
            }
          },
        },
        {
          element = {
            type = R.ElementType.Treasure,
            name = "Treasure Chest Vertical",
          },
        },
        {
          element = {
            type = R.ElementType.Coin,
            name = "Coin 1",
          }
        }
      }
    }
  }
}
