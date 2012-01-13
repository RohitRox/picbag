class Photo
  include Mongoid::Document
  field :title, :type => String
  field :category, :type => String
  
  scope :nature, where(:category => 'nature')
  
  embedded_in :album
  
  mount_uploader :image, ImageUploader

end
