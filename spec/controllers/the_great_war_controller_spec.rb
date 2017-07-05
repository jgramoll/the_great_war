require 'rails_helper'

RSpec.describe TheGreatWarController, type: :controller do
  before do
    sign_in a_user
  end

  describe 'GET #show' do
    let(:game) { a_game }
    
    it 'returns a success response' do
      get :show, params: { id: game.to_param }, format: :json
      expect(response).to be_success
    end
  end
end
