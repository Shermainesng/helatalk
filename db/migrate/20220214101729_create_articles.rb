class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.string :url
      t.string :author
      t.string :publisher

      t.timestamps
    end
  end
end
