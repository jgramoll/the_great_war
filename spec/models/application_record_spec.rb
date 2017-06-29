require 'rails_helper'

RSpec.describe ApplicationRecord, type: :model do
  describe 'as_json' do
    let(:game) { Game.new(id: 1) }

    it 'returns id as string' do
      expect(game.as_json['id']).to eq(game.id.to_s)
    end
  end
end
