local scenario = {
  -- can be defined on the top level
  extraContent = {
    -- one entry
    {
      -- The name of the registered extra component
      name = "Extra Stuff",
      -- The position where the content will spawn
      position = { 10, 2, 10 },
    },
    -- a second entry
    {
      -- ..
    },
  },
  rooms = {
    [2] = {
      -- Or as part of a room
      extraContent = {
        {
          name = "More Extra Stuff",
          position = { 10, 2, 10 },
        }
      }
    }
  }
}