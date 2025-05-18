const typeChart: Record<string,
  {
    weakTo: string[];
    resistantTo: string[];
  } > = {

  normal: {
    weakTo: ["fighting"],
    resistantTo: []
  },
  fire: {
    weakTo: ["water", "rock", "ground"],
    resistantTo: ["fire", "grass", "ice", "bug", "steel", "fairy"]
  },
  water: {
    weakTo: ["electric", "grass"],
    resistantTo: ["fire", "water", "ice", "steel"]
  },
  electric: {
    weakTo: ["ground"],
    resistantTo: ["electric", "flying", "steel"]
  },
  grass: {
    weakTo: ["fire", "ice", "poison", "flying", "bug"],
    resistantTo: ["water", "electric", "grass", "ground"]
  },
  ice: {
    weakTo: ["fire", "fighting", "rock", "steel"],
    resistantTo: ["ice"]
  },
  fighting: {
    weakTo: ["flying", "psychic", "fairy"],
    resistantTo: ["bug", "rock", "dark"]
  },
  poison: {
    weakTo: ["ground", "psychic"],
    resistantTo: ["grass", "fighting", "poison", "bug", "fairy"]
  },
  ground: {
    weakTo: ["water", "ice", "grass"],
    resistantTo: ["poison", "rock"]
  },
  flying: {
    weakTo: ["electric", "ice", "rock"],
    resistantTo: ["grass", "fighting", "bug"]
  },
  psychic: {
    weakTo: ["bug", "ghost", "dark"],
    resistantTo: ["fighting", "psychic"]
  },
  bug: {
    weakTo: ["fire", "flying", "rock"],
    resistantTo: ["grass", "fighting", "ground"]
  },
  rock: {
    weakTo: ["water", "grass", "fighting", "ground", "steel"],
    resistantTo: ["normal", "fire", "poison", "flying"]
  },
  ghost: {
    weakTo: ["ghost", "dark"],
    resistantTo: ["poison", "bug"]
  },
  dragon: {
    weakTo: ["ice", "dragon", "fairy"],
    resistantTo: ["fire", "water", "electric", "grass"]
  },
  dark: {
    weakTo: ["fighting", "bug", "fairy"],
    resistantTo: ["ghost", "dark"]
  },
  steel: {
    weakTo: ["fire", "fighting", "ground"],
    resistantTo: [
      "normal", "grass", "ice", "flying", "psychic",
      "bug", "rock", "dragon", "steel", "fairy"
    ]
  },
  fairy: {
    weakTo: ["poison", "steel"],
    resistantTo: ["fighting", "bug", "dark"]
  }
}

export default typeChart;