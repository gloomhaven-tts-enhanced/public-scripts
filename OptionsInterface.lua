local OptionsInterface = {}

OptionsInterface.HpChanges = {
    All = "all", Character = "chars", Monster = "monster", None = "none",
}

--- Returns the value for the given option.
---@param path string
---@return any
local function getValue(path)
    return --[[---@type any]] Global.call("__getOptionValue", path)
end

---@return gloom_Options_Setup_ScenarioPage
function OptionsInterface.scenarioBookSettings()
    return getValue("setup.scenarioPage")
end

---@return boolean
function OptionsInterface.useHiddenSetup()
    return getValue("setup.useHiddenSetup")
end

---@return boolean
function OptionsInterface.use3DModels()
    return getValue("setup.use3D")
end

---@return boolean
function OptionsInterface.dealBattleGoals()
    return getValue("scenario.dealBattleGoals")
end

---@return boolean
function OptionsInterface.hideAbilityCards()
    return getValue("scenario.hideAbilityCards")
end

---@param type gloom_Options_Message_HpChanges
---@return boolean
function OptionsInterface.broadcastHpChanges(type)
    local changesTo = --[[---@type gloom_Options_Message_HpChanges]] getValue("message.hpChanges")
    return changesTo == OptionsInterface.HpChanges.All or changesTo == type
end

---@return boolean
function OptionsInterface.broadcastActiveAbilities()
    return getValue("message.activeAbilities")
end

---@return boolean
function OptionsInterface.useOpenInformation()
    return getValue("difficulty.openInformation")
end

---@return boolean
function OptionsInterface.useRevisedStaminaPotions()
    return getValue("version.revisedStaminaPotions")
end

return OptionsInterface
