source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'coffee-rails', '~> 4.2', '>= 4.2.2'
gem 'devise', '>= 4.3.0'
gem 'jbuilder', '~> 2.5'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'rails', '~> 5.1.1'
gem 'react_on_rails', '8.0.0'
gem 'redis', '~> 3.0'
gem 'sass-rails', '~> 5.0', '>= 5.0.6'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker_lite', '>= 2.0.4'

group :development, :test do
  gem 'pry'
  gem 'pry-nav'
  gem 'rubocop', '~> 0.49.1', require: false
end

group :development do
  gem 'inch'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.5.1'
end

group :test do
  gem 'capybara', '>= 2.14.1'
  gem 'capybara-screenshot', '>= 1.0.14'
  gem 'chromedriver-helper'
  gem 'poltergeist', '>= 1.15.0'
  gem 'rspec-rails', '>= 3.6.0'
  gem 'selenium-webdriver'
  gem 'simplecov', require: false
end
