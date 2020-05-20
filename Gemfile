source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'coffee-rails', '~> 4.2', '>= 4.2.2'
gem 'devise', '>= 4.4.2'
gem 'jbuilder', '~> 2.7', '>= 2.7.0'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'rails', '~> 5.2.4', '>= 5.2.4.3'
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
  gem 'spring', '>= 2.0.2'
  gem 'spring-watcher-listen', '~> 2.0.1'
  gem 'web-console', '>= 3.5.1'
end

group :test do
  gem 'capybara'
  gem 'capybara-screenshot'
  gem 'chromedriver-helper'
  gem 'poltergeist'
  gem 'rspec-rails', '>= 3.6.0'
  gem 'selenium-webdriver'
  gem 'simplecov', require: false
end
