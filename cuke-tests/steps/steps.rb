require 'rubygems'
require 'capybara'
require 'capybara/dsl'

include Capybara::DSL
Capybara.run_server = false
Capybara.default_driver = :selenium
Capybara.app_host = 'http://localhost:8019'

Given /^the sessions from ALE2011$/ do
    #empty step for now
end

When /^I look at the board$/ do
  visit '/board'
end

Then /^the page title should be "([^"]*)"$/ do |expected_title|
  find(:xpath,"//title").should have_content(expected_title)
end

Then /^the page headline should be "([^"]*)"$/ do |expected_headline|
  find(:xpath, "//h1").should have_content(expected_headline)
end

def validate_space(day_element, space)
  day_element.should have_selector('ul.spaces li', :text => space["space_name"])

  space_element = day_element.find('ul.spaces li', :text => space["space_name"])
  space_element.should have_selector('ul.slots li time', :text => space["time"])

  slot_element = space_element.find('ul.slots li div', :text => space["time"])
  slot_element.should have_selector('div.proposer', :text => space["proposer"])
  slot_element.should have_selector('div.session', :text => space["session"])
end

Then /^I should be able to see the following slots for "([^"]*)"$/ do |day, spaces|
  page.should have_selector('ul.days li', :text => day)
  day_element = find('ul.days li', :text => day)

  spaces.hashes.each do |space|
    validate_space(day_element, space)
  end
end

