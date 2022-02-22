class Api::ArticlesController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    skip_policy_scope
    cat = params[:category]
    category = Category.where(name: cat)
    @articles = category.first.articles

    render json: @articles
  end
end
