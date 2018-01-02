class Api::PurchasesController < ApplicationController

  def create
    @purchase = Purchase.new(purchase_params)

    if @purchase.save
      render json: @purchase
    else
      render json: {errors: @purchase.errors.full_messages}, status: 422
    end

  end

  def update
    @purchase = Purchase.find(params[:id])

    @purchase.update(purchase_params)
    if @purchase.save
      render json: @purchase
    else
      render json: {errors: @purchase.errors.full_messages}, status: 422
    end
  end


  private
    def purchase_params
      params.permit(:purchase, :user_id, :category_id)
    end

end
