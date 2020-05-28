class PokemonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :move
end
