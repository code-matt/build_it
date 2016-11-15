require_relative '../rails_helper.rb'
require_relative '../spec_helper.rb'

describe 'carrierwave' do
  it 'should successfully upload files' do
    a = User.create(email: "qq@qq.com", password: "12345678")
    src = File.join(Rails.root,"client/public/favicon.ico")
    file = File.new(src)
    a.avatar = file
    a.save
    expect(a.avatar).to be_a(AvatarUploader)
  end
end