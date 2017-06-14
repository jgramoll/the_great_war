module Factories
  def a_game(**attrs)
    attrs = attrs.reverse_merge(name: "Test Game")
    Game.create!(attrs)
  end
end