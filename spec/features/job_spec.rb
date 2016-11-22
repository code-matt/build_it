require 'rails_helper.rb'
require 'spec_helper.rb'

require 'capybara/poltergeist'
Capybara.javascript_driver = :poltergeist

describe "jobs", js: true do
  
  it "User with incomplete profile can not add job" do
    visit '/'
    find('.navbutton', :text => 'Login').click
    within('.login') do
      fill_in 'Valid Email', with: 'qq@qq.com'
      fill_in 'Password', with: '12345678'
      find('.btn', :text => 'Login').click
    end
    sleep(1)
    page.execute_script('$("#addjobbtn").trigger("click")')
    expect(page).to have_content 'We need to know a little more about you'
  end

  it "User with complete profile can add a job" do
    visit '/'
    find('.navbutton', :text => 'Login').click
    within('.login') do
      fill_in 'Valid Email', with: 'ee@ee.com'
      fill_in 'Password', with: '12345678'
      find('.btn', :text => 'Login').click
    end
    sleep(1)
    page.execute_script('$("#addjobbtn").trigger("click")')
    expect(page).to have_content 'Submit Job'
  end

  it "Job filled out correctly submits successfully" do
    visit '/'
    find('.navbutton', :text => 'Login').click
    within('.login') do
      fill_in 'Valid Email', with: 'ee@ee.com'
      fill_in 'Password', with: '12345678'
      find('.btn', :text => 'Login').click
    end
    sleep(2)
    page.execute_script('$("#addjobbtn").trigger("click")')
    within('.job') do
      fill_in 'Title', with: 'A job title'
      fill_in 'Valid Address', with: '33 Harrison ave, boston ma'
      fill_in 'Description', with: 'This needs to be longer than twenty characters'
      fill_in '0', with: '8'
    end
    find('.btn', :text => 'Submit Job').click
    expect(page).to have_content 'Job Added'
  end

  it "Invalid address in new job form should show error" do
    visit '/'
    find('.navbutton', :text => 'Login').click
    within('.login') do
      fill_in 'Valid Email', with: 'ee@ee.com'
      fill_in 'Password', with: '12345678'
      find('.btn', :text => 'Login').click
    end
    sleep(2)
    page.execute_script('$("#addjobbtn").trigger("click")')
    within('.job') do
      fill_in 'Title', with: 'A job title'
      fill_in 'Valid Address', with: ''
      fill_in 'Description', with: 'This needs to be longer than twenty characters'
      fill_in '0', with: '8'
    end
    find('.btn', :text => 'Submit Job').click
    expect(page).to have_content 'Address is invalid!'
  end
end