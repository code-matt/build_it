require "rails_helper"
require 'capybara/poltergeist'
require 'database_cleaner'
Capybara.javascript_driver = :poltergeist

Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app, {js_errors: false})
end

feature "contractor features" do
  scenario "registered contractor signs in", js: true do
    visit root_path
    fill_in 'worker[email]', with: "contractor1@contractor.com"
    fill_in 'worker[password]', with: "contractor1"
    page.execute_script("$( '#sign-in-button' ).click()")
    sleep 1
    expect(page).to have_content('A worker has signed up for one of your jobs!')
  end
end
