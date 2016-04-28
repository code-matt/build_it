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
  
  scenario "contractor adds a new job", js: true do
    visit root_path
    fill_in 'worker[email]', with: "contractor1@contractor.com"
    fill_in 'worker[password]', with: "contractor1"
    page.execute_script("$( '#sign-in-button' ).click()")
    sleep 1
    click_link 'add-new-link'
    sleep 1
    fill_in 'job[title]', with: "Labor needed on construction site"
    fill_in 'job[description]', with: "a description dsjfjfdjdfjfdfdjfdjfdjdffdjdfjdfj"
    fill_in 'job[start_date]', with: "12-11-16"
    fill_in 'job[start_time]', with: "12:33"
    fill_in 'job[end_time]', with: "14:55"
    fill_in 'job[address]', with: "15 Gordon St. Waltham, MA"
    click_button 'Sign up'
    sleep 1
    expect(page).to have_content('You have created a new job!')
  end


end
