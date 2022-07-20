all = {
  -- The ability deck to use. If not use it will use the monsters default ability deck
  abilityDeck = "Archer",
  -- A modifier that should be applied to the current scenario level.
  -- This will make the monsters stronger/weaker. It can be a Formula.
  levelModifier = 1,
  -- The current HP value for the monster. If hpMax is not used, this is also the maximum HP value.
  -- It can be a Formula. Use the variable "H" to reference the default HP value for this monster.
  hp = { "+", "H", 3 },
  -- The maximum HP value for the monster.
  -- It can be a Formula. Use the variable "H" to reference the default HP value for this monster.
  hpMax = { "+", "H", 3 },
  -- Adjusted stats for the monster
  stats = {
    -- Adjusted immunities
    immunities = {
      -- Immunities that will be added to the monster.
      add = { "Stun", "Muddle", "Poison" },
      -- Immunities that will be removed from the monster.
      remove = { "Curse" },
    },
    attributes = {
      -- Attributes that will be added/overwritten to the monster.
      -- The format is the same as for general Stats.
      -- The values currently can not be Formula, only fixed values.
      add = {
        "Muddle",
        Pierce = 3,
        Retaliate = {
          value = 2,
          range = 2,
        },
      },
      -- Attributes that will be removed from the monster.
      remove = { "Shield", "Wound" },
    },
    attack = 10,
    range = 2,
    move = 10,
    -- The text that will show below the monster.
    text = "New Text",
  }
}