class PokemonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :move, :trainer_id
end
