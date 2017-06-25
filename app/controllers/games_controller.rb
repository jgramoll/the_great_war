# controller for games
class GamesController < ApplicationController
  before_action :set_game, only: %i[show edit update destroy]
  before_action :authenticate_user!

  # GET /games
  # GET /games.json
  def index
    @games = Game.all.order(created_at: :desc)
  end

  # GET /comments/new
  def new
    render :index
  end

  # GET /games/1.json
  def show; end

  # POST /games.json
  def create
    @game = Game.new(game_params.merge(host: current_user))

    respond_to do |format|
      if @game.save
        format.json { render :show, status: :created, location: @game }
      else
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /games/1.json
  def update
    respond_to do |format|
      if @game.update(game_params)
        format.json { render :show, status: :ok, location: @game }
      else
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /games/1.json
  def destroy
    @game.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_game
    @game = Game.find(params[:id])
  end

  # Never trust parameters from the scary internet,
  # only allow the white list through.
  def game_params
    params.fetch(:game, {}).permit(:name, :game_type)
  end
end
