require 'rails_helper'
require 'features/shared/contexts'
require 'features/shared/examples'

feature 'Games create', as: :user, page: :new_game, js: true do
  include_examples 'navigate to games'

  scenario 'click create button' do
    new_game_name = 'santa'

    expect(find('h1')).to have_content 'New Game'
    fill_in 'Name', with: new_game_name
    click_on 'Create'

    expect(find('h1')).to have_content 'Games'
    expect(page.current_path).to eq games_path
    expect(find('.game-row')).to have_content new_game_name
  end

  scenario 'press enter in name field' do
    new_game_name = 'santa'

    expect(find('h1')).to have_content 'New Game'
    fill_in 'Name', with: new_game_name
    find('#name').send_keys :enter

    expect(find('h1')).to have_content 'Games'
    expect(page.current_path).to eq games_path
    expect(find('.game-row')).to have_content new_game_name
  end

  context 'missing name' do
    scenario 'displays missing name' do
      expect(find('h1')).to have_content 'New Game'
      click_on 'Create'

      expect(find('.new-game-form__create-game-error'))
        .to have_content 'Missing name'
      expect(page.current_path).to eq new_game_path
    end
  end
end
