class Api::CategoriesController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    skip_policy_scope
    @categories = Category.all

    render json: @categories
  end
end
