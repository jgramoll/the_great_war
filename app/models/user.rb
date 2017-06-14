class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # :pepper, :encryptor, :confirm_within, :remember_for, :timeout_in, :unlock_in
  # :stretches: 12
  # :database_authenticatable, :registerable,
  # :recoverable, :rememberable, :trackable, :validatable
  devise :database_authenticatable

end
