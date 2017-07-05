require 'rails_helper'
require 'request_helper'

RSpec.describe 'TheGreatWar', type: :request do
  before do
    login(a_user)
  end

  describe 'GET /games/:id' do
    let(:game) { a_game }

    it 'returns game' do
      get the_great_war_path(game.id), params: { format: :json }
      expect(response).to have_http_status(:success)

      json = JSON.parse(response.body, symbolize_names: true)
      expect(json).to include({
        :id => game.id.to_s,
        :name => game.name,
        :game_type => game.game_type
      })
    end
  end
end
