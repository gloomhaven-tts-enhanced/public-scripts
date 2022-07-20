{
  name = "Black Barrow",
  scenarioBook = {
    name = "Gloomhaven",
    page = 3,
  },
  scenarioConclusions = {
    {
      image = "http://cloud-3.steamusercontent.com/ugc/1752439086837779719/8C6A36C4FDB88BCB7B012F7121A2DB8E1876D0B3/",
      scale = { 1.50, 1.00, 1.50 },
      buttonLabel = "Reveal Conclusion (36)"
    },
  },
  gridType = ScenarioApi.GridType.Horizontal,
  doorTiles = {
    {
      name = "Stone Door Horizontal",
      tiles = {
        {
          rooms = { 2, 3 },
          position = { x = -1.75, y = 1.82, z = 6.06 },
          rotation = { x = 0, y = 180, z = 0 },
          tokens = { "1" },
        }
      }
    },
    {
      name = "Stone Door Vertical",
      tiles = {
        --
      }
    }
  },
  rooms = {
    [1] = {
      mapTiles = {
        {
          tile = "L1",
          position = { x = 0.9, y = -3.77, z = -3.03 },
          rotation = { x = 0, y = 180, z = 0 }
        }
      },
      scenarioSections = {
        {
          image = "http://cloud-3.steamusercontent.com/ugc/1752439086836487818/4256434230672E8FBFFA1CBE7C1A93984DF2EA95/",
          position = { -28.44, 1.75, 21.98 },
          scale = { 0.69, 1.00, 0.69 },
          hidden = true,
          buttonLabel = "Section 02",
        },
      },
      startTiles = {
        name = "Stone Corridor 1",
        tiles = {
          {
            position = { x = -0.43, y = 1.93, z = -5.30 },
            rotation = { x = 0, y = 0, z = 0 }
          },
        }
      },
      monsters = {
        {
          name = "Bandit Guard",
          tiles = {
            {
              numCharacters = {
                [2] = ScenarioApi.MonsterLevel.Elite,
                [3] = nil,
                [4] = nil
              },
              position = { x = 0.87, y = 2.06, z = -1.51 },
            },
          }
        }
      },
      overlayTiles = {
        {
          bag = ScenarioApi.OverlayType.Trap,
          type = {
            {
              name = "Spike Trap",
              tiles = {
                {
                  position = { x = -0.43, y = 1.93, z = 6.81 },
                  rotation = { x = 0, y = 180, z = 0 },
                },
              }
            }
          }
        },
      },
    },
    [2] = {
      -- another room
    }
  },
  monsterList = {
    "Bandit Archer",
    "Bandit Guard",
    "Living Bones"
  }
}