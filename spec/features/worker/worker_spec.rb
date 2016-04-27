require "rails_helper"
require 'capybara/poltergeist'
require 'database_cleaner'
Capybara.javascript_driver = :poltergeist

Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app, {js_errors: false})
end

feature "worker logs in" do
  scenario "registered worker signs in", js: true do
    visit root_path
    fill_in 'worker[email]', with: "worker1@worker.com"
    fill_in 'worker[password]', with: "-worker1"
    page.execute_script("$( '#sign-in-button' ).click()")
    sleep 1
    expect(page).to have_content('You have signed up for a new job!')
  end

  scenario "unregistered user signs in", js: true do
    visit root_path
    fill_in 'worker[email]', with: "notamember@worker.com"
    fill_in 'worker[password]', with: "notamember"
    page.execute_script("$( '#sign-in-button' ).click()")
    sleep 1
    expect(page).to have_content('Sign In')
  end

  scenario "worker searches for a job", js: true do
    visit root_path
    fill_in 'worker[email]', with: "worker1@worker.com"
    fill_in 'worker[password]', with: "-worker1"
    page.execute_script("$( '#sign-in-button' ).click()")
    sleep 1
    click_link 'search-link'
    fill_in 'search', with: 'nails'
    click_button 'Search'
    sleep 1
    expect(page).to have_content('nails')
  end

  scenario "worker signs up for a job", js: true do
    visit root_path
    fill_in 'worker[email]', with: "worker1@worker.com"
    fill_in 'worker[password]', with: "-worker1"
    page.execute_script("$( '#sign-in-button' ).click()")
    sleep 1
    click_link 'search-link'
    fill_in 'search', with: 'nails'
    click_button 'Search'
    sleep 2
    find('div.post').click
    sleep 2
    click_button 'SIGN UP'
    sleep 1
    expect(page).to have_content('Construction Job Title')
  end

  scenario "worker resigns from a job", js: true do
    visit root_path
    fill_in 'worker[email]', with: "worker1@worker.com"
    fill_in 'worker[password]', with: "-worker1"
    page.execute_script("$( '#sign-in-button' ).click()")
    sleep 1
    click_link 'search-link'
    fill_in 'search', with: 'Plowing'
    click_button 'Search'
    sleep 2
    find('div.post').click
    sleep 2
    click_button 'RESIGN'
    sleep 1
    expect(page).to have_content('You have resigned from a job! Plowing Job Title')
  end
end
