class Api::TransactionsController < ApplicationController

  def create
    @transaction = Transaction.new(transaction_params)

    if @transaction.save
      render json: @transaction
    else
      render json: {errors: @transaction.errors.full_messages}, status: 422
    end
    
  end

  def update
    @transaction = Transaction.find(params[:id])

    @transaction.update(transaction_params)
    if @transaction.save
      render json: @transaction
    else
      render json: {errors: @transaction.errors.full_messages}, status: 422
    end
  end


  private
    def transaction_params
      params.permit()
    end

end
