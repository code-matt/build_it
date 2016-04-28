require "rails_helper"
require 'capybara/poltergeist'
require 'database_cleaner'
Capybara.javascript_driver = :poltergeist

Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app, {js_errors: false})
end

feature "worker signs up" do
  scenario "worker signs up", js: true do
    visit root_path
    click_button 'Sign Up'
    sleep 2
    click_button 'Seeking Work'
    sleep 2
    fill_in 'worker[email]', with: "test@testguy.com"
    fill_in 'worker[password]', with: "testpassword"
    fill_in 'worker[password_confirmation]', with: "testpassword"
    click_button 'Sign up'
    sleep 2
    expect(page).to have_content('Thanks for signing up!')
  end
end
