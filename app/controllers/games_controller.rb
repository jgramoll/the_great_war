# controller for games
class GamesController < ApplicationController
  before_action :set_game, only: %i[show edit update destroy]
  before_action :authenticate_user!

  # Public: Get list of all games
  # GET /games
  # GET /games.json
  #
  # Examples
  #   # => [
  #     {
  #       id: '1',
  #       name: 'Demo',
  #       gameType: 'Demo'
  #     },
  #     ...
  #   ]
  #
  # Returns the Array of Game Records
  def index
    @games = Game.all.order(created_at: :desc)
    @games_loaded = true
  end

  # Public: Get html form for new game
  # GET /games/new
  #
  # Returns Html
  def new
    render :index
  end

  # Public: Get a game by id
  # GET /games/1
  # GET /games/1.json
  #
  # id - id of the record
  #
  # Examples
  #   # => {
  #     id: '1',
  #     name: 'Demo',
  #     gameType: 'Demo'
  #   }
  #
  # Returns Game Record
  def show
    render :show, status: :ok, location: @game
  end

  # Public: Create a game
  # POST /games.json
  #
  # name - name of the record
  # gameType - type of game
  #
  # Examples
  #   {
  #     name: 'Demo',
  #     gameType: 'Demo'
  #   }
  #   # => {
  #     id: '1'
  #     name: 'Demo',
  #     gameType: 'Demo'
  #   }
  #
  # Returns Game Record
  def create
    @game = Game.new(game_params.merge(host: current_user))

    if @game.save
      render :show, status: :created, location: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # Public: Update a game
  # PATCH/PUT /games/1.json
  #
  # name - name of the record
  #
  # Examples
  #   {
  #     name: 'New Name'
  #   }
  #   # => {
  #     id: '1'
  #     name: 'New Name',
  #     gameType: 'Demo'
  #   }
  #
  # Returns Game Record
  def update
    if @game.update(game_params)
      render :show, status: :ok, location: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # Public: Delete a game
  # DELETE /games/1.json
  #
  # Returns No Content
  def destroy
    @game.destroy
    head :no_content
  end

  private

  # Private: set game attr before actions
  def set_game
    @game = Game.find(params.require(:id))
  end

  # Private: Game params permitted
  def game_params
    params.fetch(:game, {}).permit(:name, :game_type)
  end
end
