class AddCategoryToArticles < ActiveRecord::Migration[6.1]
  def change
    add_column :articles, :category, :string
    add_column :articles, :date, :date
  end
end
