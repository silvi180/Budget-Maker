class Api::ProposedsController < ApplicationController

  def create
    @proposed = Proposed.new(proposed_params)

    if @proposed.save
      render json: @proposed
    else
      render json: {errors: @proposed.errors.full_messages}, status: 422
    end
    
  end

  def update
    @proposed = Proposed.find(params[:id])

    @proposed.update(proposed_params)
    if @proposed.save
      render json: @proposed
    else
      render json: {errors: @proposed.errors.full_messages}, status: 422
    end
  end


  private
    def proposed_params
      params.permit()
    end

end
