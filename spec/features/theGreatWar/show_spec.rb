require 'rails_helper'
require 'features/shared/contexts'
require 'features/shared/examples'

feature 'The great war details', as: :user, page: :the_great_war, js: true do
  let(:game) { a_game }

  scenario 'renders The Great War' do
    expect(find('h1')).to have_content 'The Great War'
  end

  include_examples 'navigate to games'
end
