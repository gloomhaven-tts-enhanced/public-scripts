import { ScenarioNew } from "@gloomhaven-enhanced/data";

import { Location } from "./location";

// tag::base[]
const scenario: ScenarioNew = {
  campaign: "Frosthaven",
  index: "2",
  name: "Algox Scouting",
  location: Location.Copperneck("K8"),
  complexity: 1,
  scenarioBook: {
    page: 5,
  },
  sectionBook: {
    sections: ["27.1", "6.1", "77.3"],
  },
// end::base[]
  goal: {
    type: "other",
  },
// tag::loot[]
  loot: {
    coins: 4,
    lumber: 4,
    metal: 4,
    hide: 4,
    arrowvine: 2,
    rockroot: 1,
    randomItem: true,
  },
// end::loot[]
// tag::monster[]
  monsters: {
    "Algox Archer": {},
    "Algox Guard": {},
    "Algox Priest": {
      team: "Ally",
    },
    "Algox Scout": {},
  },
// end::monster[]
// tag::overlays[]
  overlays: {
    "Ice Sheet": {
      type: "objective",
      object: "Large Ice Corridor",
      stats: {
        health: "C * (L + 2)",
      },
    },
    "Snow Rock": {
      type: "obstacle",
    },
  },
// end::overlays[]
// tag::doors[]
  doors: [
    {
      name: "Snow Door",
      rooms: ["2", "3"],
      section: "27.1",
      position: [3, 2],
    },
    {
      name: "Snow Door",
      rooms: ["1", "2"],
      section: "6.1",
      position: [0, 8],
    },
  ],
// end::doors[]
// tag::rooms-base[]
  rooms: [
    {
      index: "1",
// end::rooms-base[]
// tag::rooms-map[]
      map: [
        {
          name: "11-A-new",
          position: [-4, 9],
          rotation: 0,
        },
      ],
// end::rooms-map[]
// tag::rooms-start[]
      startArea: [
        [-6, 5],
        [-5, 6],
        [-6, 6],
        [-7, 7],
        [-7, 6],
      ],
// end::rooms-start[]
// tag::rooms-overlays[]
      overlays: [
        {
          name: "Snow Rock",
          position: [-3, 10],
          rotation: 180,
        },
// end::rooms-overlays[]
        {
          name: "Snow Rock",
          position: [-1, 11],
          rotation: 180,
        },
// tag::rooms-overlays[]
      ],
// end::rooms-overlays[]
// tag::rooms-monsters[]
      monsters: [
        {
          name: "Algox Archer",
          position: [0, 11],
          playerCount: {
            "2": "normal",
            "3": "normal",
            "4": "elite",
          },
        },
// end::rooms-monsters[]
        {
          name: "Algox Archer",
          position: [0, 9],
          playerCount: {
            "2": "normal",
            "3": "normal",
            "4": "normal",
          },
        },
        {
          name: "Algox Guard",
          position: [-5, 9],
          playerCount: {
            "2": "elite",
            "3": "elite",
            "4": "elite",
          },
        },
        {
          name: "Algox Guard",
          position: [-4, 10],
          playerCount: {
            "3": "normal",
            "4": "elite",
          },
        },
        {
          name: "Algox Guard",
          position: [-4, 9],
          playerCount: {
            "3": "normal",
            "4": "normal",
          },
        },
// tag::rooms-monsters[]
      ],
// end::rooms-monsters[]
      loot: [],
// tag::rooms-base[]
    },
// end::rooms-base[]
    {
      index: "2",
      map: [
        {
          name: "11-C-new",
          position: [2, 5],
          rotation: 60,
        },
      ],
      overlays: [
        {
          name: "Snow Rock",
          position: [3, 4],
          rotation: 180,
        },
        {
          name: "Snow Rock",
          position: [-1, 5],
          rotation: 180,
        },
      ],
      monsters: [
        {
          name: "Algox Archer",
          position: [5, 4],
          playerCount: {
            "2": "elite",
            "3": "elite",
            "4": "elite",
          },
        },
        {
          name: "Algox Archer",
          position: [3, 3],
          playerCount: {
            "2": "normal",
            "3": "elite",
            "4": "elite",
          },
        },
        {
          name: "Algox Archer",
          position: [4, 3],
          playerCount: {
            "4": "normal",
          },
        },
        {
          name: "Algox Scout",
          position: [3, 6],
          playerCount: {
            "2": "normal",
            "3": "elite",
            "4": "elite",
          },
        },
        {
          name: "Algox Priest",
          position: [-2, 5],
          playerCount: {
            "2": "normal",
            "3": "normal",
            "4": "normal",
          },
        },
      ],
      loot: [],
    },
    {
      index: "3",
      map: [
        {
          name: "14-B-new",
          position: [-1, -2],
          rotation: 60,
        },
      ],
      overlays: [
        {
          name: "Ice Sheet",
          position: [-3, -4],
          rotation: 60,
          aid: "a",
        },
      ],
      monsters: [
        {
          name: "Algox Scout",
          position: [-2, -2],
          playerCount: {
            "2": "normal",
            "3": "normal",
            "4": "elite",
          },
        },
        {
          name: "Algox Scout",
          position: [1, -2],
          playerCount: {
            "2": "elite",
            "3": "elite",
            "4": "elite",
          },
        },
        {
          name: "Algox Scout",
          position: [0, 1],
          playerCount: {
            "3": "normal",
            "4": "normal",
          },
        },
        {
          name: "Algox Scout",
          position: [3, -1],
          playerCount: {
            "3": "normal",
            "4": "normal",
          },
        },
        {
          name: "Algox Guard",
          position: [-1, -2],
          playerCount: {
            "2": "normal",
            "3": "normal",
            "4": "elite",
          },
        },
      ],
    // tag::rooms-loot[]
      loot: [
        {
          name: "Treasure Chest",
          position: [-2, 0],
          treasure: "32",
        },
        {
          name: "Loot Pouch",
          position: [6, -1],
        },
      ],
// end::rooms-loot[]
    },
// tag::rooms-base[]
  ],
// end::rooms-base[]
// tag::base[]
};
// end::base[]

export default scenario;
