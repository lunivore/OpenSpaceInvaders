require 'rubygems'
require 'capybara'
require 'capybara/dsl'
require 'rspec'

include Capybara::DSL
Capybara.run_server = false
Capybara.default_driver = :selenium
Capybara.app_host = 'http://localhost:8019'

Given /^the sessions from ALE2011$/ do
    #empty step for now
end

When /^I look at the board$/ do
  visit '/'
end

Then /^the page title should be "([^"]*)"$/ do |expected_title|
  find(:xpath,"//title").should have_content(expected_title)
end

Then /^I should be able to see the following sessions$/ do |table|

  # table is a Cucumber::Ast::Table
  pending # express the regexp above with the code you wish you had
end

