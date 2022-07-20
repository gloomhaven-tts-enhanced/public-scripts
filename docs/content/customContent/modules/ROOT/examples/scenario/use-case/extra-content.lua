local scenario = {
  -- This will be placed together with the scenario
  extraContent = {
    {
      name = "Extra Stuff",
      position = { 10, 2, 10 },
    }
  },
  rooms = {
    [2] = {
      -- This will be placed, once the room 2 will be opened
      extraContent = {
        {
          name = "More Extra Stuff",
          position = { 10, 2, 10 },
        }
      }
    }
  }
}