# controller for game: The Great War
class TheGreatWarController < ApplicationController
  before_action :set_game, only: %i[show]
  before_action :authenticate_user!

  # Public: Get great war game by id
  # GET /the_great_war/1
  # GET /the_great_war/1.json
  #
  # id - id of the record
  #
  # Examples
  #   # => {
  #     id: '1',
  #     name: 'The Great War',
  #     gameType: 'TheGreatWar'
  #   }
  #
  # Returns Game Record
  def show
    render :show, status: :ok, location: @game
  end

  private

  def set_game
    @game = Game.find(params.require(:id))
  end
end
