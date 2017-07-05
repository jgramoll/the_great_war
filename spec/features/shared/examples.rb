require 'rails_helper'
require 'features/shared/contexts'

shared_examples 'navigate to games' do
  scenario 'fetches games' do
    click_on 'Games'

    expect(page.current_path).to eq games_path
  end
end