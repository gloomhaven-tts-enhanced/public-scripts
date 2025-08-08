-- tag::changeLevel[]
function onCharacterChangeLevel(character, level)
  print(character.class, " changed to level ", level)
end
-- end::changeLevel[]

-- tag::changePerk[]
function onCharacterChangePerk(character, perk, unlocked)
  if unlocked then
    print(character.class, " unlocked the perk ", perk)
  end
end
-- end::changePerk[]
