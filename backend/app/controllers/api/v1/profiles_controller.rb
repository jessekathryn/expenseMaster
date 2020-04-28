class Api::V1::ProfilesController < ApplicationController

    def index
      @profiles = Profile.all
      render json: @profiles
    end

    def create
      @profile = Profile.new(profile_params)
      if @profile.save
        render json: @profile
      else
        render json: {error: 'Error creating profile'}
      end
    end

    def show
      @profile = Profile.find(params[:id])
      render json: @profile
    end

    def destroy
      @profile = Profile.find(params[:id])
      @profile.destroy
    end

    def update
      @profile = Profile.find(params[:id])
      @profile.update(name: params["profile"]["name"])
      @profile.save
      render json: @profile
    end

    private

    def profile_params
      params.require(:profile).permit(:name, :balance, :debt)
    end


end