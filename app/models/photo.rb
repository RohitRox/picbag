class Photo
  include Mongoid::Document
  field :title, :type => String
  embedded_in :album
  
  mount_uploader :image, ImageUploader

end
