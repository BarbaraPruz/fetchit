class TestsController < ApplicationController

    def test
        puts "Tests Controller #{params}"
        render json: 
            {"message": "Responding to HTTP Get with status code #{params[:status_code]}"}, 
            status: params[:status_code]
    end

end

