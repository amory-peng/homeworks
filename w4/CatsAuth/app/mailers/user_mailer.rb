class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def welcome_email(user)
    @user = user
    @url = 'http://99cats.com/login'
    mail(to: user.email, subject: 'welcome')
end
