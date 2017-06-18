# immutable snapshot state for a game
# a game can have many states over time
class GameState < ApplicationRecord
  belongs_to :game
end
