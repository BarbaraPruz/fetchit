class TestsController < ApplicationController

    def get
        puts "Tests Controller GET #{params}"
        render json: 
            {"message": "Responding to HTTP Get with status code #{params[:status_code]}"}, 
            status: params[:status_code]
    end

    
end
