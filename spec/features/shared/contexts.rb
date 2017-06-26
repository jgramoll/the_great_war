# require "rails_helper"

shared_context 'As User' do
  before { login_as(a_user) }
end

# Pages
shared_context 'Game Index' do
  before { visit games_path }
end
shared_context 'New Game Form' do
  before { visit new_game_path }
end
shared_context 'Game Details' do
  before { visit game_path(game) }
end

# Fixtures
shared_context 'Existing Games' do |existing_games|
  before do
    host = a_user
    existing_games.times { |i| a_game(host: host, name: "game_#{i}") }
  end
end

RSpec.configure do |rspec|
  rspec.include_context 'As User', as: :user
  rspec.include_context 'Game Index', page: :games
  rspec.include_context 'New Game Form', page: :new_game
  rspec.include_context 'Game Details', page: :game
end
