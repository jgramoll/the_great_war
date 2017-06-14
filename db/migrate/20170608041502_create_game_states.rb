class CreateGameStates < ActiveRecord::Migration[5.1]
  def change
    create_table :game_states do |t|
      t.belongs_to :game, foreign_key: true
      
      t.json :data, null: false, default: '{}'

      t.datetime :created_at
    end
  end
end
