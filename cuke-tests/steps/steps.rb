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

Then /^the page headline should be "([^"]*)"$/ do |expected_headline|
  find(:xpath, "//h1").should have_content(expected_headline)
end

Then /^I should be able to see the following slots for "([^"]*)"$/ do |day, spaces|

  page.should have_selector('ul.days li', :text => day)
  day_element = find('ul.days li', :text => day)

  spaces.hashes.each do |space|
    day_element.should have_selector('ul.spaces li', :text => space["name"])

    space_element = day_element.find('ul.spaces li', :text => space["name"])
    space_element.should have_selector('ul.times li', :text => space["time"])
  end
end

