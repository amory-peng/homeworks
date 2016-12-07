class User < ApplicationRecord
  validates :username, uniqueness: true, presence: true
  validates :session_token, uniqueness: true, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}
  validates :password_digest, presence: { message: "Password cant be blank" }
  before_validation :ensure_session_token

  attr_reader :password

  def find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && BCrypt::Password.new(password_digest).is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
