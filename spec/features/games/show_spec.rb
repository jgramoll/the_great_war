require 'rails_helper'
require 'features/shared/contexts'
require 'features/shared/examples'

feature 'Games details', as: :user, page: :game, js: true do
  let(:game) { a_game }

  include_examples 'navigate to games'

  scenario 'renders game name' do
    expect(find('h1')).to have_content game.name
  end
end
