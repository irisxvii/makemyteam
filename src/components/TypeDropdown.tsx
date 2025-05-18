type Props = {
  selectedType: string;
  setSelectedType: (type: string) => void;
}

const types = [
  "grass", "fire", "water", "bug", "normal", "poison",
  "electric", "ground", "fairy", "fighting", "psychic",
  "rock", "ghost", "ice", "dragon", "dark", "steel", "flying"
]

const TypeDropdown = ({ selectedType, setSelectedType }: Props) => {
  return (
    <select
      className="dropdown"
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
    >
      <option value="">All Types</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </option>
      ))}
    </select>
  )
}

export default TypeDropdown;
