# a polymorpic game with state
# can be any type of game
class Game < ApplicationRecord
  has_many :game_states
end
