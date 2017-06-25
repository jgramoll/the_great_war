require 'securerandom'

# Factories for use in specs
module Factories
  def a_user(**attrs)
    attrs = attrs.reverse_merge(
      email: "#{SecureRandom.uuid}-test@example.com",
      password: 'secret'
    )
    User.create!(attrs)
  end

  def a_game(host: a_user, **attrs)
    attrs = attrs.reverse_merge(
      name: 'Test Game',
      game_type: 'demo',
      host: host
    )
    Game.create!(attrs)
  end
end
