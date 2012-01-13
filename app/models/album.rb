class Album
  include Mongoid::Document
  include Mongoid::Timestamps
  field :title, :type => String
  belongs_to :user
  embeds_many :photos
end
