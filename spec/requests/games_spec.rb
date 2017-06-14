require 'rails_helper'

RSpec.describe "Games", type: :request do
  describe "GET /games" do
    it "returns empty array" do
      get games_path, params: { format: :json }
      expect(response).to have_http_status(:success)
      
      json = JSON.parse(response.body, symbolize_names: true)
      expect(json).to eq({
        games: []
      })
    end

    context "games exist" do
      let(:game) { a_game }
      let(:game_2) { a_game }

      before do
        game
        game_2
      end

      it "returns game array" do
        get games_path, params: { format: :json }
        expect(response).to have_http_status(:success)
        
        json = JSON.parse(response.body, symbolize_names: true)
        expect(json[:games].count).to eq(2)
        expect(json[:games].map{|g| g[:id] })
          .to eq([game.id, game_2.id])
      end
    end
  end

  describe "POST /games" do
    it "creates and returns new game" do
      expect {
        post games_path, params: {
          format: :json,
          game: {
            name: "test"
          }
        }
      }.to change {
        Game.count
      }.by(1)

      expect(response).to have_http_status(:created)
      json = JSON.parse(response.body, symbolize_names: true)
      expect(json[:id]).to_not be_nil
    end
  end
end
