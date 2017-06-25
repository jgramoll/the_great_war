class DisallowNulls < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:game_states, :game_id, false)
    change_column_null(:game_states, :created_at, false)

    Game.update_all(host_id: 1)
    change_column_null(:games, :host_id, false)
    
    remove_column(:games, :type, :string)
    add_column(:games, :game_type, :string)
    Game.update_all(game_type: 'TheGreatWar')
    change_column_null(:games, :game_type, false)
  end
end
