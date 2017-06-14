class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :name, null: false, index: true
      t.integer :host_id
      t.integer :type

      t.timestamps
    end
  end
end
