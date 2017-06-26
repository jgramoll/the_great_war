require 'rails_helper'
require 'features/shared/contexts'

feature 'Games create', as: :user, page: :game, js: true do
  let(:game) { a_game }

  scenario 'renders game name' do
    expect(find('h1')).to have_content game.name
  end
end
