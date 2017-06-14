require "rails_helper"
require "features/shared/contexts"

feature "Games Index", as: :user do
  context "existing games" do
    include_context "Existing Games", 2

    scenario "displays correct row count", page: :games do
      expect(page).to have_css(".game-row", count: 2)
    end
  end
end