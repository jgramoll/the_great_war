# require "rails_helper"

# Pages
shared_context "Game Index" do
  before { visit games_path }
end

# Fixtures
shared_context "Existing Games" do |existing_games|
  before { existing_games.times { a_game } }
end

RSpec.configure do |rspec|
  rspec.include_context "Game Index", page: :games
end