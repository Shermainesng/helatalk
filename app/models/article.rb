class Article < ApplicationRecord
  validates :title, :author, :url, presence: true
  belongs_to :category
end
