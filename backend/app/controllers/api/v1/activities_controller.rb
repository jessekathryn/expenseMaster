class Api::V1::ActivitiesController < ApplicationController
    before_action :set_profile
  
    def index
      @activities = Activity.all
      render json: @activities
    end
  
    def show
      @activity = Activity.find(params[:id])
      render json: @activity
    end
  
    def create
      @activity = @profile.activities.new(activity_params)
  
      @activity.date = DateTime.now
      if @profile.update_balance(@activity) != 'Balance too low.'
        @activity.save
        render json: @profile
      else
        render json: {error: 'Balance too low'}
      end
    end
  
    def destroy
      @activity = Activity.find(params["id"])
      @profile = Profile.find(@activity.account_id)
      if @profile.update_balance_on_delete(@activity)
        @activity.destroy
        render json: @profile
      else
        render json: {error: 'Balance too low'}
      end
    end
  
    private
  
    def set_profile
      @profile = Profile.find(params[:profile_id])
    end
  
  
    def activity_params
      params.require(:activity).permit(:amount, :type, :date, :decription, :profile_id, :expense_for )
    end
  
  
  end