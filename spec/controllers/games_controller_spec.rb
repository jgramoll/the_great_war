require 'rails_helper'

RSpec.describe GamesController, type: :controller do
  let(:valid_attributes) {
    {
      name: 'game_name'
    } }

  let(:invalid_attributes) {
    {
      id: '-1',
      name: nil,
      wrong_field: 'a'
    } }

  before do
    sign_in a_user
  end

  describe 'GET #index' do
    it 'returns a success response' do
      get :index

      expect(response).to be_success
    end
  end

  describe 'GET #show' do
    let(:game) { Game.create! valid_attributes }
    it 'returns a success response' do
      get :show, params: { id: game.to_param }, format: :json
      expect(response).to be_success
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      it 'creates a new Game' do
        expect {
          post :create, params: { game: valid_attributes }, format: :json
        }.to change(Game, :count).by(1)
      end
    end

    context 'with invalid params' do
      it "returns a failure response" do
        post :create, params: { game: invalid_attributes }, format: :json
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'PUT #update' do
    context 'with valid params' do
      let(:new_attributes) {
        {
          name: 'new name'
        } }

      it 'updates the requested game' do
        game = Game.create! valid_attributes
        put :update,
            params: { id: game.to_param, game: new_attributes },
            format: :json

        game.reload

        expect(game.name).to eq(new_attributes[:name])
      end
    end

    context 'with invalid params' do
      it "returns a failure response" do
        game = Game.create! valid_attributes
        put :update,
            params: { id: game.to_param, game: invalid_attributes },
            format: :json
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys the requested game' do
      game = Game.create! valid_attributes
      expect {
        delete :destroy, params: { id: game.to_param }, format: :json
      }.to change(Game, :count).by(-1)
    end
  end
end
