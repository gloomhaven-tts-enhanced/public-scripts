local ClassApi = require("api.ClassApi")
local R = require("api.Resource")

function onLoad()
    ClassApi.registerClass("Spawner Class", {
        abilities = {
            ["Meteor"] = {
                level = 7,
                spawn = {
                    {
                        element = {
                            -- This determine where the object is searched for
                            type = R.ElementType.Obstacle,
                            -- this is the exact name of the object
                            name = "Boulder 3",
                        }
                    }
                }
            },
            ["Crippling Noose"] = {
                level = 1,
                spawn = {
                    {
                        element = {
                            type = R.ElementType.Trap,
                            name = "Spike Trap",
                            -- for traps the damage and conditions can be defined as well
                            damage = 4,
                            conditions = { "Stun" },
                        }
                    }
                }
            },
        }
    })
end