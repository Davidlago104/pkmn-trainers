class TrainerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :age
end
