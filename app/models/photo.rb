class Photo
  include Mongoid::Document
  include Mongoid::Timestamps
  field :title, :type => String
  field :category, :type => String

  scope :nature, where(:category => 'nature')
  mount_uploader :image, ImageUploader

  belongs_to :album
  embeds_many :tags


end

