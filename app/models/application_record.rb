# default active record
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  # force ids to be serialized as string
  def as_json(*args)
    super.merge('id' => id.to_s)
  end
end
