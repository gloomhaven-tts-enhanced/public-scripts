local ClassApi = require("api.ClassApi")

ClassApi.registerClass("Brute", {
  isStartingClass = true,
  boxGuid = self.getGUID(),
  hp = ClassApi.HpProgression.High,
  tracker = {
    image = "http://cloud-3.steamusercontent.com/ugc/83722391140264566/DC437F88C225F04C6CCE924EA4C3BB31FCD3F3A9/"
  },
  perks = {
    [1] = { remove = { "(-1)", "(-1)" } },
    [2] = { add = { "(+1)" }, remove = { "(-1)" } },
    -- perks 3 to 14 left out
    [15] = { add = { "(+1)" }, ignore = ClassApi.PerkType.IgnoreItem }
  },
  abilities = {
    ["Eye for an Eye"] = {
      level = 1,
      enhancements = {
        [1] = { position = { -0.46, -0.92 }, multi = false, side = "T", main = true, type = ClassApi.AbilityType.Retaliate },
        [2] = { position = { -0.35, 0.53 }, multi = false, side = "B", main = true, type = ClassApi.AbilityType.Heal },
        [3] = { position = { -0.50, 0.55 }, multi = false, side = "B", main = true, type = ClassApi.AbilityType.Heal },
      }
    },
    ["Defensive Tactics"] = {
      level = 7,
      enhancements = {
        [1] = { position = { -0.41, -0.94 }, multi = true, side = "T", main = true, type = ClassApi.AbilityType.Attack },
        [2] = { position = { -0.32, -0.63 }, multi = true, side = "T", main = true, type = ClassApi.AbilityType.Target },
      }
    },
    -- other abilities left out
  }
})