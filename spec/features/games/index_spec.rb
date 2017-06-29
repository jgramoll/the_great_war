require 'rails_helper'
require 'features/shared/contexts'

feature 'Games Index', as: :user, js: true do
  scenario 'navigate to new game', page: :games do
    click_on 'New Game'

    expect(find('h1')).to have_content 'New Game'
    expect(page.current_path).to eq new_game_path
  end

  context 'existing games' do
    include_context 'Existing Games', 2

    scenario 'displays correct row count', page: :games do
      expect(page).to have_css('.game-row', count: 2)
    end

    scenario 'navigate to game details', page: :games do
      game = Game.first
      click_on game.name

      expect(find('h1')).to have_content game.name
      expect(page.current_path).to eq game_path(game)
    end

    describe 'navigate to games', page: :new_game do
      scenario 'fetches games' do
        click_on 'Games'

        expect(page).to have_css('.game-row', count: 2)
        expect(page.current_path).to eq games_path
      end
    end
  end
end
