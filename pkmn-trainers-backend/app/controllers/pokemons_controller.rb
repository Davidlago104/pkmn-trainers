class PokemonsController < ApplicationController
  before_action :set_pokemon, only: [:show, :update, :destroy]

  # GET /pokemons
  def index
    @pokemons = Pokemon.all
    serialized_data = PokemonSerializer.new(@pokemons).serialized_json
    render json: serialized_data
  end

  # GET /pokemons/1
  def show
    @pokemon = Pokemon.find_by(id: params[:id])

    render json: @pokemon, status: 402
  end

  # POST /pokemons
  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render json: @pokemon, status: :created, location: @pokemon
    else
      render json: @pokemon.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pokemons/1
  def update
    if @pokemon.update(pokemon_params)
      render json: @pokemon
    else
      render json: @pokemon.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pokemons/1
  def destroy
    @pokemon.destroy
    render json: @pokemon
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pokemon
      @pokemon = Pokemon.find(params[:id])
      render json: @pokemon
    end

    # Only allow a trusted parameter "white list" through.
    def pokemon_params
      params.require(:pokemon).permit(:name, :location, :move, :trainer_id)
    end
end
