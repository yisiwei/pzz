require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Pzz
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # paperclip
    Paperclip.options[:command_path] = "/usr/bin/convert"


    # rack_rewrite
    config.middleware.insert_before(Rack::Lock, Rack::Rewrite) do
      #rewrite   '/wiki/John_Trupiano',  '/john'
      #r301      '/wiki/Yair_Flicker',   '/yair'
      #r302      '/wiki/Greg_Jastrab',   '/greg'
      #r301      %r{/wiki/(\w+)_\w+},    '/$1'
    end

    # rack cors
    config.middleware.use Rack::Cors do
      allow do
        origins '*'
        resource '*', 
        :headers => :any, 
        :methods => [:get, :delete, :put, :post, :options],
        :max_age => 0
      end
    end


    ENV['RAILS_ADMIN_THEME'] = 'flatly_theme'

  end
end
