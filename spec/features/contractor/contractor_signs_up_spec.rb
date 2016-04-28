require "rails_helper"
require 'capybara/poltergeist'
require 'database_cleaner'
Capybara.javascript_driver = :poltergeist

Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app, {js_errors: false})
end

feature "contractor signs up" do
  scenario "contractor signs up", js: true do
    visit root_path
    click_button 'Sign Up'
    sleep 2
    click_button 'Seeking Workers'
    sleep 2
    fill_in 'contractor[email]', with: "test@testguy.com"
    fill_in 'contractor[password]', with: "testpassword"
    fill_in 'contractor[password_confirmation]', with: "testpassword"
    click_button 'Sign up'
    sleep 2
    expect(page).to have_content('Thanks for signing up!')
  end
end
