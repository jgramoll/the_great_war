require 'rails_helper'

RSpec.describe "Games", type: :request do
  describe "GET /games" do
    it "returns empty array" do
      get games_path, params: { format: :json }
      expect(response).to have_http_status(200)
      
      json = JSON.parse(response.body, symbolize_names: true)
      expect(json).to eq({
        games: []
      })
    end
  end
end
