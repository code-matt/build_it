# BuildIt 2.0
## https://build-it-la.herokuapp.com

### React + Redux + Rails simple job posting app
#### (last feature not implemented yet past submitting job proposals)

This app is a redo of my breakable toy from Launch Academy.
The old app can be found on the old_rails_version branch which was
some very messy jqerry + ajax + erb and not a very good SPA. 

### Technologies:

###Front end
```
"dependencies": {
  "dotenv": "^2.0.0",
  "react": "^15.3.2",
  "react-display-name": "^0.2.0",
  "react-dom": "^15.3.2",
  "react-dropzone": "^3.7.3",
  "react-helmet": "^3.2.2",
  "react-notify-toast": "^0.1.3",
  "react-redux": "^4.4.5",
  "redux-thunk": "^2.1.0",
  "redux": "^3.6.0",
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
Instllation: 

This project requires both AmazonsS3 Bucket keys and google geocoding public key.
Create a .env in the project root and configure it as such:
```
S3_BUCKET="your bucket name"
S3_SECRET="your amazon secret"
S3_REGION="your amazons bucket region"
S3_KEY="your bucket key"
GOOGLE_GEOCODE_KEY="your google geocoding api key"
```

##### Prod:
```
rails db:create
rails db:migrate
rails db:seed
cd client
npm install
npm run build
rails s
visit localhost:3000
```

###### Dev:
```
Tab1:
rails db:create
rails db:migrate
rails db:seed
rails s
Tab2:
npm install
npm start
visit localhost:3001
```


