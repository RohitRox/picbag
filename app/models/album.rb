class Album
  include Mongoid::Document
  include Mongoid::Timestamps
  field :title, :type => String
  belongs_to :user
  has_many :photos
end

