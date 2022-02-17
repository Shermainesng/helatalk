class Article < ApplicationRecord
  validates :title, :author, :url, presence: true
end
