require 'rails_helper'
require 'request_helper'

RSpec.describe 'Games', type: :request do
  before do
    login(a_user)
  end

  describe 'GET /games' do
    it 'returns empty array' do
      get games_path, params: { format: :json }
      expect(response).to have_http_status(:success)

      json = JSON.parse(response.body, symbolize_names: true)
      expect(json).to eq([])
    end

    context 'games exist' do
      let(:host) { a_user }
      let!(:game) { a_game(host: host, created_at: 1.day.ago) }
      let!(:game_2) { a_game(host: host, created_at: 2.day.ago) }

      it 'returns game array' do
        get games_path, params: { format: :json }
        expect(response).to have_http_status(:success)

        json = JSON.parse(response.body, symbolize_names: true)
        expect(json.count).to eq(2)
        expect(json.map { |g| g[:id].to_i })
          .to eq([game.id, game_2.id])
      end
    end
  end

  describe 'POST /games' do
    it 'creates and returns new game' do
      expect {
        post games_path, params: {
          format: :json,
          game: {
            name: 'test',
            game_type: 'demo'
          }
        }
      }.to change {
        Game.count
      }.by(1)

      expect(response).to have_http_status(:created)
      json = JSON.parse(response.body, symbolize_names: true)
      expect(json[:id]).to_not be_nil
    end

    context "failure" do
      it "returns unprocessable" do
        expect {
          post games_path, params: {
            format: :json,
          }
        }.not_to change {
          Game.count
        }

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
