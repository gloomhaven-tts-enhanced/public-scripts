local scenario = {
  monsters = {
    ["Bandit Guard"] = {
      all = {
        stats = {
          immunities = { add = { "Poison" } }, }
      },
      elite = {
        stats = {
          immunities = { add = { "Wound" } },
        },
        attributes = { add = { "Muddle" } },
      }
    }
  },
  rooms = {
    [1] = {
      monsters = {
        {
          name = "Bandit Guard",
          tiles = {
            {
              -- This Bandit Guard will get the Position immunity from all
              numCharacters = { [2] = Scenario.MonsterLevel.Normal },
            },
            {
              -- This Bandit Guard will get the Wound immunity from elite
              -- and the Muddle attack effect from elite.
              -- The immunity from all is overwritten by the immunities from
              -- elite
              numCharacters = { [2] = Scenario.MonsterLevel.Elite },
            },
            {
              -- This Bandit Guard will get the Muddle attack effect from elite
              -- and a Stun immunity from its own definition.
              -- The immunities from all and elite are overwritten by its own
              -- definition
              numCharacters = { [2] = Scenario.MonsterLevel.Elite },
              stats = {
                immunities = { add = { "Stun" } },
              },
            },
          }
        }
      }
    }
  }
}