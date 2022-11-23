{
  -- The name of the scenario
  name = "Black Barrow",
  -- Optional icon which shows to the left of the scenario name in the Game Setup menu, typically for Solo Scenarios
  icon = "http://cloud-3.steamusercontent.com/ugc/111111111111111111/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/",
  -- The scenario book used by this scenario
  scenarioBook = {
    name = "Gloomhaven",
    page = 3,
  },
  -- A list of scenario conclusion tiles that can be revealed, when the scenario is finished
  scenarioConclusions = {
    {
      image = "http://cloud-3.steamusercontent.com/ugc/1752439086837779719/8C6A36C4FDB88BCB7B012F7121A2DB8E1876D0B3/",
      scale = { 1.50, 1.00, 1.50 },
      buttonLabel = "Reveal Conclusion (36)"
    },
  },
  -- Whether the overlays are placed on a horizontal or vertical grid
  gridType = ScenarioApi.GridType.Horizontal,
  -- Adjustments to monsters inside the scenario, e.g. a changed ability deck,
  -- another monster level or different stats
  monsters = {
    ["Bandit Guard"] = {
      all = {
        levelModifier = 1,
      }
    }
  },
  -- Registered extra content that should be placed when the scenario loads.
  -- Used as a fallback to include all kind of crazyness
  extraContent = {
    {
      name = "Extra Stuff",
      position = { 0, 3, 0 },
    }
  },
  -- The list of doors connecting the different rooms
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
  -- The list of rooms in the scenario, each containing their overlays, monsters and map tiles
  rooms = {
    [1] = {
      -- The list of used map tiles
      mapTiles = {
        {
          tile = "L1",
          position = { x = 0.9, y = -3.77, z = -3.03 },
          rotation = { x = 0, y = 180, z = 0 }
        }
      },
      -- The list of scenario section tiles that will be placed for this room
      scenarioSections = {
        {
          image = "http://cloud-3.steamusercontent.com/ugc/1752439086836487818/4256434230672E8FBFFA1CBE7C1A93984DF2EA95/",
          position = { -28.44, 1.75, 21.98 },
          scale = { 0.69, 1.00, 0.69 },
          hidden = true,
          buttonLabel = "Section 02",
        },
      },
      -- The list of overlays that are start tiles
      startTiles = {
        name = "Stone Corridor 1",
        tiles = {
          {
            position = { x = -0.43, y = 1.93, z = -5.30 },
            rotation = { x = 0, y = 0, z = 0 }
          },
        }
      },
      -- The list of placed monsters
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
      -- The list of placed overlays
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
  -- A list of all monster types that are included in this scenario (including summons)
  monsterList = {
    "Bandit Archer",
    "Bandit Guard",
    "Living Bones"
  }
}
