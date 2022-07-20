-- some more lines above this one
__bundle_register("__root", function(require, _LOADED, __bundle_register, __bundle_modules)
  -- this is where the actual code lies
  local ScenarioApi = require("api.ScenarioApi")

  function onLoad()
    -- when the token is placed on the table, the scenario will be added
    -- to the list of available scenarios
    -- the first parameter "Custom Scenario" here is a unique id across all
    -- scenarios. In the scenario setup this will be the prefix in the list,
    -- e.g. "SoX1 - The Name of SoX1 Scenario"
    ScenarioApi.registerScenario("Custom Scenario", {
      -- this is the scenario definition from the scenario builder
      -- it can be adjusted to add new features
    })

    return
  end
end)
__bundle_register("api.ScenarioApi", function(require, _LOADED, __bundle_register, __bundle_modules)
  -- more stuff after this one as well, that must be untouched