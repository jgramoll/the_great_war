# default active record
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  # Public: force ids to be serialized as string
  #
  # args - Hash arguments for configuration
  #
  # Examples
  #
  #   Game.as_json
  #   # => { id: '1' }
  #
  # Returns Hash
  def as_json(*args)
    super.merge('id' => id.to_s)
  end
end
