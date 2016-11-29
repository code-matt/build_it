# BuiltIt 2.0
## https://build-it-la.herokuapp.com

### React + Redux + Rails simple job posting app

This app is a redo of my breakable toy from Launch Academy.
The old app can be found on the old_rails_version branch which was
some very messy jqerry + ajax + erb and not a very good SPA. 

### Technologies:

###Front end
```
"dependencies": {
  "react": "^15.3.2",
  "react-dom": "^15.3.2",
  "react-dropzone": "^3.7.3",
  "react-helmet": "^3.2.2",
  "react-notify-toast": "^0.1.3",
  "react-redux": "^4.4.5",
  "react-router": "^3.0.0",
  "redux-thunk": "^2.1.0",
  "superagent": "^2.3.0"
}
```

###backend
```
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'rack-cors'
gem 'geokit'
gem 'geokit-rails'
gem 'geocoder'
gem "fog-aws"
gem 'carrierwave-aws'
gem 'rmagick'
gem "mini_magick"
gem "forgery"

#auth
gem 'knock', '~> 1.5'
gem 'bcrypt', '~> 3.1.7'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'dotenv-rails'
  gem 'rspec-rails', '~> 3.5'
  gem 'capybara'
  gem 'poltergeist'
end
```

###
Instllation: coming soon


