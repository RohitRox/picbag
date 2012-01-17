class Tag
  include Mongoid::Document
  include Mongoid::Timestamps

  field :x_cord, :type => String
  field :y_cord, :type => String
  field :name, :type => String

end

