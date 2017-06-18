# Factories for use in specs
module Factories
  def a_user(**attrs)
    attrs = attrs.reverse_merge(
      email: 'test@example.com',
      password: 'secret'
    )
    User.create!(attrs)
  end

  def a_game(**attrs)
    attrs = attrs.reverse_merge(name: 'Test Game')
    Game.create!(attrs)
  end
end
