all = {
  -- The ability deck to use. If not used it will use the monsters default
  -- ability deck
  abilityDeck = "Archer",
  -- A modifier that should be applied to the current scenario level.
  -- This will make the monsters stronger/weaker. It can be a Formula.
  levelModifier = 1,
  -- The current HP value for the monster. If hpMax is not used, this is also
  -- the maximum HP value.
  -- It can be a Formula. Use the variable "H" or "this" to reference the
  -- default HP value for this monster.
  hp = { "+", "H", 3 },
  -- The maximum HP value for the monster.
  -- It can be a Formula. Use the variable "H" or "this" to reference the
  -- default maximum HP value for this monster.
  hpMax = { "+", "this", 3 },
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
      -- Attributes that will be added to the monster. If the monster already
      -- has the attribute, it will be overwritten with this definition.
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
    -- The adjusted attack value. Can be a formula, where the variable "this"
    -- refers to the default attack value for this monster (at its current
    -- level).
    attack = { "+", "this", 1 },
    range = { "+", "this", 1 },
    -- The adjusted move value. Can be a formula, where the variable "this"
    -- refers to the default move value for this monster (at its current
    -- level).
    move = {
      type = "Flying",
    },
    -- The text that will show below the monster.
    text = "New Text",
  }
}