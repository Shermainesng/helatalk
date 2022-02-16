class Api::ArticlesController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    skip_policy_scope
    category = params[:category]
    @articles = Article.where(category: category)

    render json: @articles
  end
end
