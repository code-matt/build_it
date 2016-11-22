require 'rails_helper.rb'
require 'spec_helper.rb'

require 'capybara/poltergeist'
Capybara.javascript_driver = :poltergeist

# require 'billy/capybara/rspec'
# Capybara.current_driver = :webkit_billy

describe "the signin process", js: true do
  
  it "successfully signs in with valid creds" do
    visit '/'
    find('.navbutton', :text => 'Login').click
    within('.login') do
      fill_in 'Valid Email', with: 'qq@qq.com'
      fill_in 'Password', with: '12345678'
      find('.btn', :text => 'Login').click
    end
    expect(page).to have_content 'Login Successful!'
  end

  it "sign in fails with invalid creds" do
    visit '/'
    find('.navbutton', :text => 'Login').click
    within('.login') do
      fill_in 'Valid Email', with: 'invalid@email.com'
      fill_in 'Password', with: '12345678'
      find('.btn', :text => 'Login').click
    end
    expect(page).to have_content 'Login Failure :('
  end
end