require 'test_helper'

class PokemonsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pokemon = pokemons(:one)
  end

  test "should get index" do
    get pokemons_url, as: :json
    assert_response :success
  end

  test "should create pokemon" do
    assert_difference('Pokemon.count') do
      post pokemons_url, params: { pokemon: { location: @pokemon.location, move: @pokemon.move, name: @pokemon.name } }, as: :json
    end

    assert_response 201
  end

  test "should show pokemon" do
    get pokemon_url(@pokemon), as: :json
    assert_response :success
  end

  test "should update pokemon" do
    patch pokemon_url(@pokemon), params: { pokemon: { location: @pokemon.location, move: @pokemon.move, name: @pokemon.name } }, as: :json
    assert_response 200
  end

  test "should destroy pokemon" do
    assert_difference('Pokemon.count', -1) do
      delete pokemon_url(@pokemon), as: :json
    end

    assert_response 204
  end
end
