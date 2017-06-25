json.extract! game, :name, :created_at, :updated_at, :game_type
json.id game.id.to_s if game
json.url game_url(game, format: :json)
