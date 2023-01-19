source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'coffee-rails', '~> 4.2', '>= 4.2.2'
gem 'devise', '>= 4.7.0'
gem 'jbuilder', '~> 2.7', '>= 2.7.0'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'rails', '~> 6.1.7', '>= 6.1.7.1'
gem 'react_on_rails', '8.0.0'
gem 'redis', '~> 3.0'
gem 'sass-rails', '~> 5.0', '>= 5.0.8'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker_lite'

group :development, :test do
  gem 'pry'
  gem 'pry-nav'
  gem 'rubocop', '~> 0.49.1', require: false
end

group :development do
  gem 'inch'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.1'
  gem 'web-console', '>= 3.5.1'
end

group :test do
  gem 'capybara'
  gem 'capybara-screenshot'
  gem 'chromedriver-helper'
  gem 'poltergeist'
  gem 'rspec-rails'
  gem 'selenium-webdriver'
  gem 'simplecov', require: false
end
