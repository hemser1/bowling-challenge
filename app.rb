require 'sinatra/base'

class BowlingApp < Sinatra::Base
  enable :sessions
  set :public_folder, File.dirname(__FILE__) + '/'

    get '/' do
      File.read('public/index.html')
    end
end
